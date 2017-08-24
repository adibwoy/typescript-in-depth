import {ScientificCalculator} from "./ScientificCalculator";
import {BasicCalculator} from "./BasicCalculator";
import {FinanceCalculator} from "./FinanceCalculator";

let basicCalc = new BasicCalculator(5);
let scientificCalc = new ScientificCalculator(5);
let financeCalc = new FinanceCalculator(5);

console.log(
    basicCalc
        .add(5)
        .multiply(5)
        .currentValue());


console.log(
    scientificCalc
        .add(5)
        .multiply(5)
        .sin()
        .currentValue());


console.log(
    financeCalc
        .add(5)
        .multiply(5)
        .calculateInterest()
        .currentValue());