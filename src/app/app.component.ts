import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // nama element yang digunakan untuk memanggil komponen ini
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-day1';
  test = 'testtttttttt';

  isVisible = true;

  nama_lengkap = "daniel kusuma pratama"
  isLoading = false;

  startLoading() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
