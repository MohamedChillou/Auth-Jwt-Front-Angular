import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AthentificationService } from './athentification.service';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginComponent,
    AdminComponent,
    UserComponent,
    NotAuthComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
