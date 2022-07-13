
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";

const routes: Routes = [
  { path: 'navbar',  component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',useHash :true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
