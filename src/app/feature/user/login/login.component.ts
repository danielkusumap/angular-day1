import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeTab: string = 'login';

  constructor(private auth: AuthService, private router: Router){}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  registerFrom = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log('Login form submitted', this.loginForm.value);
    
    try {
      await this.auth.login(this.loginForm.value.email!!, this.loginForm.value.password!!);
      this.router.navigate(['/pokemon'])
    } catch (err) {
      this.router.navigate([''])
    }
  }

  async onRegister() {
    if (this.registerFrom.invalid) {
      this.registerFrom.markAllAsTouched();
      return;
    }

    try {
      await this.auth.register(this.registerFrom.value.email!!, this.registerFrom.value.password!!);
      this.router.navigate(['/pokemon'])
    } catch (err) {
      this.router.navigate([''])
    }

    console.log('Register form submitted');
  }
}
