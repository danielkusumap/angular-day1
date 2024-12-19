import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',  // nama element yang digunakan untuk memanggil komponen ini
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges{
  title = 'angular-day1';
  test = 'testtttttttt';

  isVisible = true;

  nama_lengkap = "daniel kusuma pratama"
  isLoading = false;

  constructor(private auth: AuthService, private router: Router){}

  isLoggedin = false;

  ngOnInit(): void {
    if (this.auth.isSessionStorageAvailable()){
      if (sessionStorage.getItem("user")){
        this.isLoggedin = true;
      } else {
        this.isLoggedin = false;
      }
    }
      
  }

  ngOnChanges(): void {
    if (this.auth.isSessionStorageAvailable()){
      if (sessionStorage.getItem("user")){
        this.isLoggedin = true;
      } else {
        this.isLoggedin = false;
      }
    }
    
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }


  startLoading() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
