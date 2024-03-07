import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { RegisterComponent } from "./components/register/register.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        LoginComponent,
        HeaderComponent,
        RegisterComponent
    ]
})
export class AppComponent implements OnInit {
  title = 'Agile Solutions';

  constructor(protected loginSrv: LoginService) {}

  ngOnInit(): void {
    this.loginSrv.checkToken().subscribe(
      (response) => {
        let result = JSON.parse(JSON.stringify(response));
        if (result.valid) {
          this.loginSrv.setIsLoggedIn(true);
        }
      },
      (error) => {}
    );
  }
}
