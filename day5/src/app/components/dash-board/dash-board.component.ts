import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {


  }

}


