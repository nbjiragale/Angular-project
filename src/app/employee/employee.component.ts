import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];


  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();

  }

  private getEmployees()
  {
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees=data; 
    })
  }

}
