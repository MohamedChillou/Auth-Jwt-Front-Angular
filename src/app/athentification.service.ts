import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AthentificationService {

  constructor(private http:HttpClient, private route:Router) { }
  loding : boolean = false;
  lienConnexion : string ="https://localhost:7069/api";
  lienAuth : string ="/Authentification";
  lienAdmin : string ="/Admin";
  lienUser : string = "/User";
  usr : any ;

  token  : string = "";
  getToken = () : string => this.token;
  setToken = (token : string ) => this.token = token;

  login = (login:any): Observable<any> =>{
    return this.http.post<any>(this.lienConnexion + this.lienAuth + "/login",login);   
  }

  addUser = (user : any) : Observable<any> =>{
    return this.http.post<any>( this.lienConnexion + this.lienAuth + "/ajoute-user", user );
  }

  getLoding = (): boolean => this.loding;

  setLoding = (value : boolean) : boolean => this.loding = value ;

  private getHeader = () :HttpHeaders =>{
    let user = localStorage.getItem("User");
    if (user == null) {
      this.route.navigateByUrl('/login');
      return new HttpHeaders();
    }else{
      const token = JSON.parse(user).token;
      console.log(token);
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
  }

  getMessageAdmin = (): Observable<any> =>{
      return this.http.get(this.lienConnexion + this.lienAdmin + "/Get-Message",{headers:this.getHeader()});
  }

  getMessageUser = (): Observable<any> => {
    return this.http.get(this.lienConnexion + this.lienUser + "/Get-Message",{headers:this.getHeader()});
  }
  checkedRole(roleAccess: string): void {
    const user = localStorage.getItem("User");
    if (user === null) {
      this.route.navigateByUrl('/login');
    } else if (roleAccess === 'Admin') {
      this.usr = JSON.parse(user);
      const roles: string[] = this.usr.roles;
      if (!roles.includes("Admin")) {
        this.route.navigateByUrl("/user");
      }
    }
  }
  
}
