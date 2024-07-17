import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, DashboardComponent, LoginComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'payrollfrontend';

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    this.configureOAuthService();
  }

  private configureOAuthService() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.setupAutomaticSilentRefresh();

    // Load discovery document and try login
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(() => {
        // Check if already authenticated
        if (this.oauthService.hasValidAccessToken()) {
          console.log('Already authenticated');
        } else {
          console.log('Not authenticated');
        }
      })
      .catch(err => console.error('Error loading discovery document', err));
  }

  login() {
    console.log("Initiating login flow...");
    this.oauthService.initLoginFlow();
  }

  logout() {
    console.log("Logging out...");
    this.oauthService.logOut();
  }

  get token() {
    console.log(this.oauthService.getAccessToken());
    return this.oauthService.getAccessToken();
  }
}
