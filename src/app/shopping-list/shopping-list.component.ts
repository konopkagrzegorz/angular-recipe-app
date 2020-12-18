import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = [];

  constructor() { 
    this.ingredients.push(new Ingredient("Bacon",4));
    this.ingredients.push(new Ingredient("Sau e",4));
    this.ingredients.push(new Ingredient("Cheese",2));
    this.ingredients.push(new Ingredient("Apple",2));
    this.ingredients.push(new Ingredient("Orange",1));
  
  }

  ngOnInit(): void {
  }

}
