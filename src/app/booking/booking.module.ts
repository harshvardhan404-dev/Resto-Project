import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { BookTableComponent } from './book-table/book-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookingComponent,
    BookTableComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [BookingComponent,
    BookTableComponent
  ]
})
export class BookingModule { }
