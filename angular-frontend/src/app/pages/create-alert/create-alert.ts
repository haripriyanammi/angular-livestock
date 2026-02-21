import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api';

@Component({
  selector: 'app-create-alert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-alert.html'
})
export class CreateAlertComponent {
  symbol = '';
  targetprice = '';

  isLoading = false;//track if api call is happening
  message = '';

  constructor(private api: ApiService) {}

  submitAlert() {
    if (!this.symbol || !this.targetprice) {
      this.message = "Please enter all fields.";
      return;
    }

    this.isLoading = true;

    const body = {
      symbol: this.symbol,
      targetprice: Number(this.targetprice)
    };

    this.api.createAlert(body).subscribe({
      next: (res) => {
        this.message = "Alert created successfully!";
        this.isLoading = false;
      },
      error: (err) => {
        this.message = "Error creating alert.";
        this.isLoading = false;
      }
    });
  }
}
