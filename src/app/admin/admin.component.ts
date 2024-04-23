import { Component, OnInit } from '@angular/core';
import { AthentificationService } from '../athentification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements  OnInit {
  user:object={}
  message : string ="";
  constructor(private services:AthentificationService){
  }

  ngOnInit(): void { 
    this.services.checkedRole('Admin');
    this.services.getMessageAdmin()
    .subscribe({
      next : resp =>{
        console.log(resp);
        this.message = resp.data
      },
      error : err =>{ console.log(err)}
    })
  }


}
