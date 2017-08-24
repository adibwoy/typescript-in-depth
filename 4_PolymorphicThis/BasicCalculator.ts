

export class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        console.log("this is instance of - ", this);
        return this.value;
    }
    public add(operand: number): this {
        console.log("Adding");
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        console.log("Multiplying");
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}