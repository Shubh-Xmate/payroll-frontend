import { Routes } from '@angular/router';
import { ProfileComponent } from './components/dashboard/main-content/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeaveRequestComponent } from './components/dashboard/main-content/leave-request/leave-request.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: ProfileComponent },
          { path: 'leaverequest', component:  LeaveRequestComponent}
        ]
      }
];
