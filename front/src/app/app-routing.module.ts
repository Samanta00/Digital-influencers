import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './Interfaces/page/page.component';
import { RegisterComponent } from './Interfaces/register/register.component';
import { LoginComponent } from './Interfaces/login/login.component';


const routes: Routes = [
  {path:'',component:PageComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
