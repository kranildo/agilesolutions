import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = ''; 

  constructor(private loginService: LoginService , private router: Router) { 
  }

  showView() : void { 
    this.loginService.configs.setRegisterView(true);
  }
  
  onSubmit() {
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
  }
}
