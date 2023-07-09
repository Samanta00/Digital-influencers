import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageComponent } from './Interfaces/page/page.component';
import { RegisterComponent } from './Interfaces/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Interfaces/login/login.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateInfluencersComponent } from './Interfaces/dashboard/create-influencers/create-influencers.component';
import { ListInfluencersComponent } from './Interfaces/dashboard/list-influencers/list-influencers.component';
import { EditInfluencersComponent } from './Interfaces/dashboard/edit-influencers/edit-influencers.component';
import { FilterInfluencersComponent } from './Interfaces/dashboard/filter-influencers/filter-influencers.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    RegisterComponent,
    LoginComponent,
    CreateInfluencersComponent,
    ListInfluencersComponent,
    EditInfluencersComponent,
    FilterInfluencersComponent,
  
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
