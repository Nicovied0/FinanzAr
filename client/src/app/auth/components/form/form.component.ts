import { AuthService } from '../../../core/services/Auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private authService: AuthService, private router: Router) {}

  showLogin: boolean = true;

  loginData = {
    email: '',
    password: '',
  };

  registerData = {
    username: '',
    password: '',
    email: '',
  };

  toggleForm(isLogin: boolean) {
    this.showLogin = isLogin;
  }

  login() {
    const { email, password } = this.loginData;
    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        this.router.navigate(['/app/']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }

  registerUser() {
    const { username, email, password } = this.registerData;
    this.authService.register(email, password, username).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
