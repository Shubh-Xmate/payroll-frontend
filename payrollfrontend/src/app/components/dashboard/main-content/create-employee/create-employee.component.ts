import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IEmployee } from './employee.model';
import { CreateEmployeeService } from '../../../../services/create-employee.service';

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
    managerId: 0,
    roleId: '',
    dateOfJoining: new Date(),
    salaryId: 0,
    employeeId: 0
  };
  showDetails: boolean = false;

  constructor(private createEmployeeService : CreateEmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // this.employee = form.value;
      // console.log('Employee Data:', this.employee);
        this.createEmployeeService.createEmployee(this.employee).subscribe({
          next: (response) => {
            console.log('Employee created successfully:', response);
            this.showDetails = true;
          },
          error: (error) => {
            console.error('Error creating employee:', error);
          }
        });
    }
  }
}
