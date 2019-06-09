import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rental } from '../models/rental.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  
  public properties: Array<rental> = new Array();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/properties/allproperties").subscribe((response) => {
      this.properties = JSON.parse(JSON.stringify(response));
      console.log(this.properties);
  })
  }

}
