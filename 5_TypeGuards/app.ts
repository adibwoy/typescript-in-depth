/* typeof TypeGuards*/
function doSomething(x: number | string) {
    if (typeof x === "string") {
        //x is a string
        //can use string methods without the compiler complaining
        x.toUpperCase();
    } else {
        //x is a number
        //can use number methods without the compiler complaining
        x.toPrecision();
    }
}

























































/* instanceof Type Guards*/

class Square {
    kind: "square";
    size: number;
}
class Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
class Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    if (s instanceof Square) {
        return s.size * s.size;
    } else if (s instanceof Rectangle) {
        return s.height * s.width;
    } else {
        return Math.PI * s.radius ** 2
    }
}







































/* Literal Type Guards*/
type Foo = {
    kind: 'foo', // Literal type
    foo: number
}
type Bar = {
    kind: 'bar', // Literal type
    bar: number
}

function doStuff(arg: Foo | Bar) {
    if (arg.kind === 'foo') {
        console.log(arg.foo); // OK
        //console.log(arg.bar); // Error!
    }
    else {  // MUST BE Bar!
        //console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
}























/* User-Defined Type Guards */

interface Vehicle {
    numberOfWheels: number;
}

function isVehicle(v: any): v is Vehicle {
    return (<Vehicle>v).numberOfWheels !== undefined;
}

function performAction(v: any) {
    if (isVehicle(v)) {
        v.numberOfWheels = 4;
    } else {
        //do Something else
    }
}