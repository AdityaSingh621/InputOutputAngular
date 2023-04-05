import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/Employee';
@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.scss']
})
export class DataTransferComponent {
  employees : Employee[] = [];

  constructor(private _employeeServices: EmployeeService){}

  ngOnInit(){
    this.employees = this._employeeServices.getEmployee();
  }
}
