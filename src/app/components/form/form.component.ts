import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() name = ''
  text !: string;
  values !: string
  updateValues !: string

  

  birthday = new Date(2001, 7, 2);
  amount = 25000;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() nameOutput = new EventEmitter<string>();

  giveOutput(value : string){
    console.log(value)
    this.nameOutput.emit(value);
  }

  addNewItem(val : string){
    console.log(val);
    this.newItemEvent.emit(val);
    
  }

  onKey(val : any){
    this.values = val.target.value;
  }

  update(value: string){
    this.updateValues = value;
  }

}
