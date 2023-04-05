import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-project';
  nameEl = 'tomerahero'
  items:string[] = [];
  inputEntre :string = '';

  addItems(newItem : string){
    this.items.push(newItem);
  }

  showInputEntred(val : string){
    this.inputEntre = val;
  }
}
