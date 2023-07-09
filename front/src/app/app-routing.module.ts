import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './Interfaces/page/page.component';
import { RegisterComponent } from './Interfaces/register/register.component';
import { LoginComponent } from './Interfaces/login/login.component';
import { DashboardtemplateComponent } from './Interfaces/dashboard/menu/dashboardtemplate.component';


const routes: Routes = [
  {path:'',component:PageComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardtemplateComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
