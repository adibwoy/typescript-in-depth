import {BasicCalculator} from "./BasicCalculator";

export class FinanceCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public calculateInterest(): this {
        console.log("Calculating the Interest Rate");
        this.value = Math.cos(this.value);
        return this;
    }
    // ... other operations go here ...
}