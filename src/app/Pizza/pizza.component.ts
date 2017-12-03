import { ImageService } from './../image.service';
import { PizzaType } from 'app/Pizza/pizzaType';
import { Pizza } from './pizza';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import * as _ from 'lodash';

@Component({
    selector: 'pizza',
    templateUrl: 'pizza.component.html',
    styleUrls: ['pizza.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PizzaComponent implements OnInit {
    @Input() value: Pizza;

    @Output() onPizzaDeleteClick: EventEmitter<Pizza> = new EventEmitter<Pizza>();
    @Output() onValueChanged: EventEmitter<Pizza> = new EventEmitter<Pizza>();

    image: string = this.imageService.roundPizzaImage;
    pizzaTypes: SelectItem[] = [];

    constructor(private imageService: ImageService) {

    }

    ngOnInit(): void {
        this.pizzaTypes.push({ label: 'Okrągła', value: 1 });
        this.pizzaTypes.push({ label: 'Prostokątna', value: 2 });
    }

    removePizza(): void {
        this.onPizzaDeleteClick.emit(this.value);
    }

    changePizzaType(pizzaType: PizzaType) {
        switch (pizzaType) {
            case PizzaType.round:
                this.image = this.imageService.roundPizzaImage;
                break;
            case PizzaType.square:
                this.image = this.imageService.squarePizzaImage;
                break;
        }
        this.recalc();
    }

    recalc() {
        let result = 0;
        switch (this.value.pizzaType) {
            case PizzaType.round:
                result = ((this.value.diameter / 2) * (this.value.diameter / 2) * 3.14) / this.value.price;
                break;
            case PizzaType.square:
                result = (this.value.width * this.value.height) / this.value.price;
                break;
        }
        this.value.pricePerUnit = _.round(result, 2);

        this.onValueChanged.emit(this.value);
    }
}

