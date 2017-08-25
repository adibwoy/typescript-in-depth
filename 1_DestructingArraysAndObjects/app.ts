import {Employee} from "./employee";

let employees: Employee[] = [
    {
        id: "1",
        name: "Scott",
        sheepkiller: false,
        robot: false
    }, {
        id: "2",
        name: "Eudes",
        sheepkiller: false,
        robot: true
    }, {
        id: "3",
        name: "Shijir",
        sheepkiller: true,
        robot: false
    }, {
        id: "4",
        name: "Jeeyun",
        sheepkiller: false,
        robot: false
    }, {
        id: "5",
        name: "Matt",
        sheepkiller: false,
        robot: false
    }
];



















/*** Destructuring Arrays ***/

let [scott, eudes, shijir, ...others] = employees; //... is the Rest operator
/*console.log("*******");
console.log(scott);
console.log(eudes);
console.log(shijir);
console.log("====");
console.log(others);
console.log("*******");*/


function logEmployees([scott, eudes, shijir, ...others]: Employee[]) {
    console.log("\n*******");
    console.log(scott);
    console.log(eudes);
    console.log(shijir);
    console.log("====");
    console.log(others);
    console.log("*******");
}

//logEmployees(employees);


















/*** Destructuring Objects ***/

let {id, name, sheepkiller, robot} = scott;

//console.log(id, name, sheepkiller, robot);

let {id: printId, name: printName, sheepkiller: printSheep, robot: printRobot} = scott;

//console.log(printId, printName, printSheep, printRobot);



























/*** Spread Operator ***/

let allStarEmojiUploaders: string[] = ["Aditya"];
let regularEmployees: string[] = ["Eudes", "Scott", "Jeeyun", "Shijir", "Matt", "Jeremy"];

allStarEmojiUploaders.push(...regularEmployees);

//console.log(allStarEmojiUploaders);


//Shallow Copy of an Object
const todo = {
    text: "Water the flowers",
    completed: false,
    tags: ["garden"]
};

const shallowCopy = { ...todo };

console.log(shallowCopy);




