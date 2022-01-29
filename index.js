
let salaries = [];

for (let i = 0; i < 5; i++) {
	salaries.push(10000)
}

for (let i = 0; i < 15; i++) {
	salaries.push(25000)
}

for (let i = 0; i < 40; i++) {
	salaries.push(50000)
}

for (let i = 0; i < 10; i++) {
	salaries.push(100000)
}

let sum = 0
for(let i = 0; i < salaries.length; i++) {
    sum += salaries[i]
}

let taxPercentage = 20;
percentageOfAllSalaries = sum / 100 * taxPercentage;
console.log(percentageOfAllSalaries);

let staff = 70;
let averagePercentage = Math.floor(percentageOfAllSalaries / staff);
console.log(averagePercentage);