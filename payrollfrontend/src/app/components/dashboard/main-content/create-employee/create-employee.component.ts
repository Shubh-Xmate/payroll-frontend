import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IEmployee } from './employee.model';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  employee: IEmployee = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dob: new Date(),
    managerId: '',
    roleId: '',
    dateOfJoining: new Date(),
    salaryId: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.employee = form.value;
      console.log('Employee Data:', this.employee);
    }
  }
}