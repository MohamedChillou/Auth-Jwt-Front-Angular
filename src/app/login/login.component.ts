import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import * as validator from 'validator';
import { AthentificationService } from '../athentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
      this.services.setLoding(false);
      this.isLoding = this.services.getLoding(); 
  }

  constructor(private http:HttpClient,private route : Router,private services :AthentificationService){
  }
  username : string ="";
  password : string ="";
  isLoding ?: boolean ;

  afficher = ():void => {
      this.isLoding = this.services.setLoding(true);
      if(validator.isEmpty(this.username) || validator.isEmpty(this.password)){
        alert('remplis les champs');
        this.services.setLoding(false);
      }
      let login :object = {
        UserName : this.username,
        Password :this.password
      };
     this.services.login(login)
      .subscribe({
        next : resp => {
          let isAdmin:boolean = false;
          console.log(resp);
          localStorage.setItem("User",JSON.stringify(resp));
          for(let role of resp.roles){
              if(role == "Admin"){
                isAdmin = true;
              }
          }
          if (isAdmin) {
            this.route.navigateByUrl('/admin')
          }else{
            this.route.navigateByUrl('/user')
          }
          this.username = "";
          this.password ="";
        },
        error: err => {
            alert(err.error);
            this.isLoding = this.services.setLoding(false);
        },
      });


  }

}
