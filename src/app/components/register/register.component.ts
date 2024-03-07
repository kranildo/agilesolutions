import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private loginService: LoginService ) {}

  hiddenView():void{
    this.loginService.configs.setRegisterView(false);
  }

  onSubmit() {
    this.loginService.register(this.name, this.email, this.password).subscribe(
      (response) => {
        this.loginService.login(this.email, this.password).subscribe(
          (response) => {
            window.location.reload();
            let result = JSON.parse(JSON.stringify(response));
            localStorage.setItem('token', JSON.stringify(result.access_token));
          },
          (error) => {
            let result = JSON.parse(JSON.stringify(error));
            alert(result.error.error);
          }
        );
      },
      (error) => {
        let result = JSON.parse(JSON.stringify(error));
        alert(result.error.error);
      }
    );
  }
}
