import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageComponent } from './Interfaces/page/page.component';
import { RegisterComponent } from './Interfaces/register/register.component';
import { LoginComponent } from './Interfaces/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CreateInfluencersComponent } from './Interfaces/dashboard/create/create-influencers.component';
import { ListInfluencersComponent } from './Interfaces/dashboard/list/list-influencers.component';
import { EditInfluencersComponent } from './Interfaces/dashboard/edit/edit-influencers.component';
import { FilterInfluencersComponent } from './Interfaces/dashboard/filter/filter-influencers.component';
import { DashboardtemplateComponent } from './Interfaces/dashboard/menu/dashboardtemplate.component';

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
    DashboardtemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
