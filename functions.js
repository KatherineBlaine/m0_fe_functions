// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function greetUser() {
    console.log("Hello, User. Its great to see you!")
}

for (var i = 0; i < 3; i++) {
greetUser();
}


// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function greetUser(name) {
    console.log(`Hello, ${name}. Its great to see you!`)
}

greetUser("Katherine")


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will 
// represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name 
// of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function evaluateSalaryRange (_company, num1, num2) {
    var num = num2 - num1;
    return num;
}

var name = "Turing"
var highSalary = 10000000
var lowSalary = 100000
var salaryRange = evaluateSalaryRange(name, lowSalary, highSalary)

console.log(`The company ${name} has a pay range of ${salaryRange}`)

// 4: Write a function that satifies the following interaction pattern:

// checkStock(4, "Coffee");
// => "Coffee is stocked"

// checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// => "Salsa - running LOW"


function checkStock(num, _product){
    var stock = num
    return stock
}

var product = "Cheese"
var stock = 0

if (checkStock(stock, "product") >= 4) {
    console.log(`${product} is stocked.`)
} else if (checkStock(stock, "product") === 3 || checkStock(stock, "product") === 1) {
    console.log(`${product} is running low.`)
} else {
    console.log(`${product} is out of stock.`)
}

console.log(checkStock(stock, "product"))