import { PizzaType } from 'app/Pizza/pizzaType';
import { Pizza } from './Pizza/pizza';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'app';
  pizzas: Pizza[] = [];

  ngOnInit(): void {
    this.newPizza();
  }

  newPizza() {
    const pizza = new Pizza();
    pizza.pizzaType = PizzaType.round;
    this.pizzas.push(pizza);
  }

  onPizzaRemove(pizza: Pizza) {
    if (this.pizzas.length <= 1) {
      return;
    }

    const index = this.pizzas.indexOf(pizza, 0);
    if (index > -1) {
      this.pizzas.splice(index, 1);
    }
  }
}

