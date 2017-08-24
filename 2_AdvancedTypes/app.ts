/*String Literal Types*/

type EmpCategory = 'Manager';

let scott: EmpCategory = "Manager"; //All Good

//scott.empCategory = "Dev"; //Error
//This is because Scott can never be a Dev because he is now a Manager.






































/* Union Types */

interface Cash {
    kind: "cash"; //String Literal
}

interface Paypal {
    kind: "paypal";
    email: string;
}

interface CreditCard {
    kind: "credit";
    cardNumber: number;
    ccv: number;
}

type PaymentMethod = Cash | Paypal | CreditCard;

//Result
let paymentMethod: PaymentMethod;
//instead of
//let paymentMethod: any;

paymentMethod = {
    kind: "cash"
}

/*
paymentMethod = {
    kind: "cash",
    currency: "USD"
}
*/























/* Combining String Literal and Union Types */

type CardinalDirection = "North" | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection) {
    //Logic
}

move(10,"North");
//move (10, "Nurth"); //Error






































/* Tuples */

// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK


// Initialize it incorrectly
//x = [10, "hello"]; // Error


// OK, 'string' can be
// assigned to 'string | number'
x[2] = "world";























/* Intersection Types */

class Loggable {
    log(): void {
        //logic
    }
}

class Serializable {
    serialize(): void {
        //logic
    };
}

let testObject: Loggable & Serializable;

testObject = {
    log: () => {},
    serialize: () => {}
};


//ERROR
/*
testObject = {
    log: () => {}
}
 */