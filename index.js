// var moment = require("moment"); modern version is -> import moment from "moment";

// var math = require("mathjs"); modern version is -> import { chain } from "mathjs";

import moment from "moment";
import { chain } from "mathjs";

console.log("hello from JavaScript!");
var datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(chain(3).add(4).multiply(2).done());

let name = "Bob Ross";
let time = "today";
console.log(`Hello, ${name}, how are you ${time}?????`);

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
