import { PizzaType } from "app/Pizza/pizzaType";

export class Pizza {
    id: number;
    diameter: number;
    width: number;
    height: number;
    price: number;
    message = '0';
    pizzaType: PizzaType;

    Recalc() {
        let result = 0;
        if (this.pizzaType === PizzaType.round) {
            result = ((this.diameter / 2) * (this.diameter / 2) * 3.14) / this.price;
        } else if (this.pizzaType === PizzaType.square) {
            result = (this.width * this.height) / this.price;
        }
        let msg = `${parseFloat(`${Math.round(result * 100) / 100}`).toFixed(2)}`;
        if (msg !== 'NaN') {
            msg += ' zł';
        }
        this.message = msg;
    }

}
