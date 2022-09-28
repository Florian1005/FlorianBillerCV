
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {PortailComponent} from "./component/Portail/portail.component";
import {AppComponent} from "./app.component";
import {BaseComponent} from "./component/base/base.component";

const routes: Routes = [
  { path: 'navbar',  component: NavbarComponent },
  { path: 'portail',  component: PortailComponent },
  { path: '**',  component: BaseComponent },
  { path: '',  component: BaseComponent },
  {path: 'home', component: BaseComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',useHash :false, enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
