//Print today date
var today=new Date();
console.log("Today is: "+today);

//print date by milliseconds
var milliseconddate=new Date(10000);
console.log(milliseconddate);

//date with string
var dateString=new Date("May 9,2020 09:33:12");
console.log("Date of given dateString is: "+dateString)

//epoch time
var epochTime=new Date(0);
console.log("Epoch time: "+epochTime);

//date with given all seperate parameters
var givenDate=new Date(2018,2,13,14,52,17,456);
console.log("Date of given date is: "+givenDate);
