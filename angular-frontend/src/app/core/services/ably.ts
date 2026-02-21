import { Injectable } from '@angular/core';
import  Ably from 'ably';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AblyService {
  private realtime: Ably.Realtime;
  private channel: Ably.RealtimeChannel;

  // Observable that dashboard will subscribe to
  public priceUpdates$ = new BehaviorSubject<any>(null);

  constructor() {
    // Use your Ably key
    this.realtime = new Ably.Realtime({
      key: 'YOUR_ABLY_API_KEY',   // <- replace
    });

    this.channel = this.realtime.channels.get('alerts');

    // Start listening
    this.subscribeToUpdates();
  }

  private subscribeToUpdates() {
    this.channel.subscribe((msg) => {
      console.log('Realtime Update:', msg.data);
      this.priceUpdates$.next(msg.data);
    });
  }
}
