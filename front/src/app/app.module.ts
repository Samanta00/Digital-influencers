import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageComponent } from './Interfaces/page/page.component';
import { RegisterComponent } from './Interfaces/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Interfaces/login/login.component';
import { DashboardComponent } from './Interfaces/dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
