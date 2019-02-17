import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
//第三方
import { ElModule } from 'element-angular';

import { LoginComponent } from './login/login/login.component';
import { BodyComponent } from './body/body/body.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
