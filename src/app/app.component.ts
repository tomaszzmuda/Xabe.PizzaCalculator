import { PizzaType } from 'app/Pizza/pizzaType';
import { Pizza } from './Pizza/pizza';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent implements OnInit {
  title = 'app';
  pizzas: Pizza[] = [];

  ngOnInit(): void {
    this.newPizza();
  }

  recalc() {
    for (const pizza of this.pizzas) {
      pizza.Recalc();
    }
  }

  newPizza() {
    const pizza = new Pizza();
    pizza.pizzaType = PizzaType.round;
    this.pizzas.push(pizza);
  }

  onPizzaRemove(pizza: Pizza) {
    const index = this.pizzas.indexOf(pizza, 0);
    if (index > -1) {
      this.pizzas.splice(index, 1);
    }
  }
}

