import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { booking } from '../models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public bookings: Array<booking> = new Array();
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/bookings/allbookings").subscribe((response) => {
      this.bookings = JSON.parse(JSON.stringify(response));
      console.log(this.bookings);
  })
  }

}
