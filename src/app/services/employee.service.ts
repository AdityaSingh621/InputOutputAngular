import { Injectable } from '@angular/core';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(): Employee[]{
    return [
      { id: 1, name: 'Nike' },
      { id: 2, name: 'Balenciaga' },
      { id: 3, name: 'Gucci' },
      { id: 4, name: 'Addidas' },
    ];
  }
}
