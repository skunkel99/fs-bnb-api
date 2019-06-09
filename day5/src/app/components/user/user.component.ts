import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: Array<User> = new Array();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get("http://localhost:3000/users/allusers").subscribe((response) => {
      this.users = JSON.parse(JSON.stringify(response));
      console.log(this.users);
  }
    )}

}
