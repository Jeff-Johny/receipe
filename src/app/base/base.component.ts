import { Component } from '@angular/core';


type ItemType = {
  name: string;
  id: number;
  selected: boolean;
}
type ReturnType = {
  name: string;
  id: number;
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  items: ItemType[]= [
    {name: 'Tomato', id: 1, selected: false},
    {name: 'Garlic', id: 2, selected: true},
    {name: 'Potato', id: 3, selected: false},
    {name: 'Cheese', id: 4, selected: false},
    {name: 'Butter', id: 5, selected: false},
  ]
  returnVal: ReturnType[] = [];
  showList = false;
  constructor(){}

  getDishes(){
    const selectedItems = this.items.filter(item => item.selected);
    // fetch backend with selectedItems
    // lets hope backend returns the below value
    this.returnVal = [
      {name: 'Sambar', id: 1},
      {name: 'Avial', id: 1},
      {name: 'Pulisheri', id: 1},
    ]
  }

}
