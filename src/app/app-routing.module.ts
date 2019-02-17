import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'body', component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
