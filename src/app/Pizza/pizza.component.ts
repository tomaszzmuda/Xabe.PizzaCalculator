import { PizzaType } from 'app/Pizza/pizzaType';
import { Pizza } from './pizza';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
    selector: 'pizza',
    templateUrl: 'pizza.component.html',
    styleUrls: ['pizza.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PizzaComponent implements OnInit {
    @Input() value: Pizza;

    @Output() pizzaRemove: EventEmitter<Pizza> = new EventEmitter<Pizza>();

    image: string;
    pizzaTypes: SelectItem[] = [];

    ngOnInit(): void {
        this.image = 'assets/roundPizza.jpg';

        this.pizzaTypes.push({ label: 'Okrągła', value: 1 });
        this.pizzaTypes.push({ label: 'Prostokątna', value: 2 });
    }

    removePizza(): void {
        this.pizzaRemove.emit(this.value);
    }

    changePizzaType(event) {
        if (event.value === 1) {
            this.image = 'assets/roundPizza.jpg';
        }
        else {
            this.image = 'assets/squarePizza.jpg';
        }
    }
}

