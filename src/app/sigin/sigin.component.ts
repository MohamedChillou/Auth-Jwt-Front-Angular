import { Component,OnInit } from '@angular/core';
import { AthentificationService } from '../athentification.service';
import { Router } from '@angular/router';


interface UserForAdd{
  UserName: string ,
  Email:string,
  Password:string,
  Roles:string[]
}


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})


export class SiginComponent implements OnInit {
  
  ngOnInit(): void {
    this.services.setLoding(false);
    this.isLoding = this.services.getLoding();
  }

  constructor(private services : AthentificationService,private route:Router){
  }

  user: UserForAdd = { UserName: '', Email: '', Password: '', Roles: ['User'] };
  checkedPassword : string = "";
  isChecked : boolean = false;
  roles ? : string[] ;
  isLoding ? : boolean;

  rolesOfUser = (checked:boolean) :void => {
    if(checked)
      this.user.Roles.push("Admin");
  }

  initVariable = () :void =>{
    this.user = {
      UserName: "",
      Email: "",
      Password: "",
      Roles: ['User']
    };
    this.checkedPassword = "";
  }

  registre = (): void => {
    this.rolesOfUser(this.isChecked);
    if (this.checkedPassword !== this.user.Password) {
      alert("Le mot de passe est incorrecte")
    }
    this.services.addUser(this.user)
    .subscribe({
      next : resp =>{
        alert("L'utilisateur est bien ajoute");
        console.log(resp.message);
        this.route.navigateByUrl('/login');
      },
      error : message =>{
        console.log(message.error.message);
      }
    })
    this.initVariable();
  }

}
