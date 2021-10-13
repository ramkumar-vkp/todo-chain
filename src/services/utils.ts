import moment from "moment";

let date = new Date().toTimeString();
console.log(`date : time string : ${date}`);
date = new Date().toString();
console.log(`date : time string : ${date}`);
let mome = moment(new Date(date));

console.log(`date : time string : ${moment(new Date(date)).format("hh:mm a")}`);
