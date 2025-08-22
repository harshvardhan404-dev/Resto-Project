import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookingRequest } from '../Models/booking-request';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {

  bookingRequest !: BookingRequest;


  bookingDetails = this.formBuilder.group({
    bookingDate: new FormControl<string>('', [Validators.required]),
    bookingTime: new FormControl<string>('', Validators.maxLength(4)),
    headCount: new FormControl<number>(0, Validators.maxLength(6))
  });

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService) { }

  captureBookingDetails(): void {
    if (this.bookingDetails.valid) {
      this.bookingRequest = new BookingRequest();
      this.bookingRequest.bookingDate = this.bookingDetails.value.bookingDate!;
      this.bookingRequest.bookingTime = this.bookingDetails.value.bookingTime!;
      this.bookingRequest.headCount = this.bookingDetails.value.headCount!;
      this.bookingService.createBooking(this.bookingRequest);
    }
    console.log(this.bookingDetails)
  }
}
