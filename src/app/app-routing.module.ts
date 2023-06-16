import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepartureComponent} from "./departure/departure.component";
import {ArrivalComponent} from "./arrival/arrival.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: 'departure', component: DepartureComponent},
  {path: 'arrival', component: ArrivalComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
