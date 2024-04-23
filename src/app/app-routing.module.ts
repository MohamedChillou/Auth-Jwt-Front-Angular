import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SiginComponent } from './sigin/sigin.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  {path:'registre',component:SiginComponent},
  {path:'logout',component:LogoutComponent} ,
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
