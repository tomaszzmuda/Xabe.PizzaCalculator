import { PizzaType } from 'app/Pizza/pizzaType';

export class Pizza {
    id: number;
    diameter: number;
    width: number;
    height: number;
    price: number;
    pricePerUnit: number;
    pizzaType: PizzaType;
    isCheapest: boolean;

    get message(): string {
        if (!this.pricePerUnit) {
            return;
        }

        const msg = this.pricePerUnit + ' zł';
        return msg;
    }
}
