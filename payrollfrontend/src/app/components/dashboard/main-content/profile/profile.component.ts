import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../create-employee/employee.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  employee: IEmployee = {
    firstName: 'John',
    lastName: 'Doe',
    mobileNumber: '123-456-7890',
    dob: new Date(1990, 1, 1),
    managerId: 'MGR001',
    roleId: 'ROLE001',
    dateOfJoining: new Date(2015, 6, 15),
    salaryId: 'SAL001'
  };

  constructor() { }

  ngOnInit(): void {
    // Fetch employee data from service or initialize as shown
  }
}