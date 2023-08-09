// - Write a program that calculates the percentage.

var obtain: number = 844;
var total: number = 1100;
var multiply: number = 100;
var percentage: number = (obtain * multiply) / total;
console.log(percentage);

// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

var celcius: number = 37;
var result: number = (celcius * 9) / 5 - 32;
console.log(result, "Fahrenheit");

//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var number_of_days: number = 180;
var days_of_week: number = 7;
var result1: number = 180 / 7;
if ((result1 = 25.714285714285715)) {
  console.log("25 weeks and 6 days");
} else {
  console.log("Wrong");
}

// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

var old: number = 20;
if (old > 0 && old <= 12) {
  console.log("YOu are child");
} else if (old >= 13 && old <= 19) {
  console.log("you are teenage");
} else {
  console.log("Adults");
}

//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

var temperature: number = 10;
if (temperature >= 10) {
  console.log("The weather is cold so waer the warm clothes ");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("The weather is normal");
} else if (temperature >= 30 && temperature <= 40) {
  console.log("The weather is hot");
} else {
  console.log("Humary khud k Aamalo ki SAZA");
}

//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var price = 50;
if (price >= 100) {
  console.log("Discount is " + 0.1 * price);
} else {
  console.log("Discount is " + 0.05 * price);
}

// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var nmbr: number = 35;
if (nmbr % 3 == 0 && nmbr % 5 == 0) {
  console.log("Number is Divible by 3 and 5 ");
} else if (nmbr % 3 == 0) {
  console.log("nmbr 3 is divisible");
} else if (nmbr % 5 == 0) {
  console.log("nmbr 5 is divisible");
} else {
  console.log("Number is not Divible by 3 and 5 ");
}

// - Write a program that checks if the given year is leap year or not.
var year: number = 2024;
var dvd: number = 4;
if (year % dvd == 0) {
  console.log("This is the leap year");
} else {
  console.log("This is not leap year");
}

//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

var givenDaysNum: number = 3;
switch (givenDaysNum) {
  case 1:
    {
      console.log("Its Monday");
    }
    break;
  case 2:
    {
      console.log("Its Tuesday");
    }
    break;
  case 3:
    {
      console.log("Its Wednesday");
    }
    break;
  case 4:
    {
      console.log("Its Thursday");
    }
    break;
  case 5:
    {
      console.log("Its Friday");
    }
    break;
  case 6:
    {
      console.log("Its Saturday");
    }
    break;
  case 7:
    {
      console.log("Its Sunday");
    }

    break;

  default:
    {
      console.log("No day selected");
    }
    break;
}


//Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var totalUnits: number = 250;
var oneUnit_Price: number = 20;
var billAmount: number = totalUnits * oneUnit_Price;
if (totalUnits > 100) {
  var tax_Onbill: number = (billAmount * 10) / 100;
  var bill: number = billAmount + tax_Onbill;
  console.log(
    ` your total units is 250 and your bill is ${bill} with 10% tax `
  );
} else if (totalUnits > 200) {
  var tax_Onbill: number = (billAmount * 15) / 100;
  var bill: number = billAmount + tax_Onbill;
  console.log(
    ` your total units is 250 and your bill is ${bill} with 10% tax `
  );
} else if (totalUnits > 300) {
  var tax_Onbill: number = (billAmount * 20) / 100;
  var bill: number = billAmount + tax_Onbill;
  console.log(
    ` your total units is 250 and your bill is ${bill} with 10% tax `
  );
} else if (totalUnits > 400) {
  var tax_Onbill: number = (billAmount * 25) / 100;
  var bill: number = billAmount + tax_Onbill;
  console.log(
    ` your total units is 250 and your bill is ${bill} with 10% tax `
  );
} else if (totalUnits > 500) {
  var tax_Onbill: number = (billAmount * 30) / 100;
  var bill: number = billAmount + tax_Onbill;
  console.log(
    ` your total units is 250 and your bill is ${bill} with 10% tax `
  );
}
