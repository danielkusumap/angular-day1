import { Injectable } from '@angular/core';


// service ini akan tersedia diseluruh aplikasi (karena prodivedIn: 'root') 
// tanpa perlu ditambahkan ke dalam modue
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  login(){
    this.isLoggedIn = true;
    console.log("user logged in");
  }

  logout(){
    this.isLoggedIn = false;
    console.log("user logged out");
  }

  getStatus(){
    return this.isLoggedIn;
  }

  constructor() { }
}
