import { PizzaType } from 'app/Pizza/pizzaType';
import { Pizza } from './pizza';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
    selector: 'pizza',
    templateUrl: 'pizza.component.html',
    styleUrls: ['pizza.component.css']
})

export class PizzaComponent implements OnInit {
    @Input() value: Pizza;

    @Output() pizzaRemove: EventEmitter<Pizza> = new EventEmitter<Pizza>();

    roundPizzaImage: any[] = [];
    squarePizzaImage: any[] = [];
    pizzaTypes: SelectItem[] = [];

    ngOnInit(): void {
        this.roundPizzaImage.push({ source: 'assets/roundPizza.jpg', thumbnail: 'assets/roundPizzaMini.jpg', title: 'Pizza' });
        this.squarePizzaImage.push({ source: 'assets/squarePizza.jpg', thumbnail: 'assets/squarePizzaMini.jpg', title: 'Pizza' });

        this.pizzaTypes.push({ label: 'Okrągła', value: 1 });
        this.pizzaTypes.push({ label: 'Prostokątna', value: 2 });
    }

    removePizza(): void {
        this.pizzaRemove.emit(this.value);
    }
}

