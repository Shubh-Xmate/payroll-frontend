import { Routes } from '@angular/router';
import { ProfileComponent } from './components/dashboard/main-content/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeaveRequestComponent } from './components/dashboard/main-content/leave-request/leave-request.component';
import { LeaveDetailsComponent } from './components/dashboard/main-content/leave-details/leave-details.component';
import { PayrollDetailsComponent } from './components/dashboard/main-content/payroll-details/payroll-details.component';
import { GeneratePayrollComponent } from './components/dashboard/main-content/generate-payroll/generate-payroll.component';
import { CreateEmployeeComponent } from './components/dashboard/main-content/create-employee/create-employee.component';
import { RequestedLeavesComponent } from './components/dashboard/main-content/requested-leaves/requested-leaves.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: ProfileComponent },
          { path: 'leave-request', component:  LeaveRequestComponent},
          { path: 'leave-details', component:  LeaveDetailsComponent },
          { path: 'payroll-details', component:  PayrollDetailsComponent},
          { path: 'generate-payroll', component: GeneratePayrollComponent },
          { path: 'create-employee', component:  CreateEmployeeComponent},
          { path: 'requested-leaves', component: RequestedLeavesComponent }
        ]
      }
];
