import { Component, OnInit } from '@angular/core';
import { AthentificationService } from './athentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Jwt-Auth';

  constructor(private services:AthentificationService){}
  
  ngOnInit(): void {
    this.services.checkedRole('User');  
  }


}
