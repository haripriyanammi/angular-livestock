import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api';
import { AblyService } from '../../core/services/ably';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  alerts: any[] = [];//store all alerts

  constructor(
    private api: ApiService,
    private ably: AblyService
  ) {}

  ngOnInit(): void {
    this.loadAlerts();
    this.subscribeToRealtimeAlerts();
  }

  loadAlerts() {
    this.api.getAlerts().subscribe((data) => {
      this.alerts = data;
    });
  }

 subscribeToRealtimeAlerts() {
  this.ably.priceUpdates$.subscribe((data) => {
    if (data) {
      console.log("Realtime alert:", data);
      this.alerts.unshift(data);
    }
  });
}
}
