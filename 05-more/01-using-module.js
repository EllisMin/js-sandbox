// Importing: REQUIRES BUNDLING
import someStr from "./01-using-module-export"; // Importing default
import { add, mult as m, num} from "./01-using-module-export"; // Importing function & var
import * as importedAll from './01-using-module-export' // Importing everything

console.log(someStr);
console.log(`Adding function: ${add(num,num)}`);
console.log(`Multiplication function: ${m(num,num)}`);

console.log(importedAll.someStr);
