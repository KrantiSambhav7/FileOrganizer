import helpFn from "./commands/help.js";
import organizeFn from "./commands/organize.js";
import treeFn from "./commands/tree.js";

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let input = inputArr[1];

switch (command) {
    case "tree": {
        treeFn(input);
        break;
    }
    case "organize": {
        organizeFn(input)
        break;
    }
    case "help": {
        helpFn();
        break;
    }
    default: {
        console.log("Enter a valid command");
    }
}



