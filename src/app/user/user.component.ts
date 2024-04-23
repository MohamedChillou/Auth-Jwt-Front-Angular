import { Component ,OnInit} from '@angular/core';
import { AthentificationService } from '../athentification.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  message : string ="";
  constructor(private services:AthentificationService,private router:Router){
  }
  ngOnInit(): void {
      this.services.checkedRole('User');
      this.services.getMessageUser()
      .subscribe({
        next : resp => {
          this.message = resp.data;
        },
        error : err =>{
          alert("l'access n'est pas possible");
          this.router.navigateByUrl('/logout');
        }
      });
  }
}
