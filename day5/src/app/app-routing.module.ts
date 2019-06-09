import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component';
import { BookingComponent } from './components/booking/booking.component';
import { PropertyComponent } from './components/property/property.component';

const routes: Routes = [
  {
    path: "", 
    component: DashBoardComponent
  },
  {path: "user", 
component: UserComponent},
{path: "booking", 
component: BookingComponent},
{path: "properties", 
component: PropertyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
