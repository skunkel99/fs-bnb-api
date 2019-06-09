import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { Router, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';

import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './components/booking/booking.component';
import { PropertyComponent } from './components/property/property.component';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UserComponent,
    BookingComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,

    // RouterModule.forRoot([
    //   {
    //     path: "dashboard",
    //     component: DashBoardComponent
    //   }
    // ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
