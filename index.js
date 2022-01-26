let salary = [5 * 10000, 15 * 25000, 40 * 50000, 10 * 100000];
let sum = 0;
for(let i = 0; i < salary.length; i++) {
    sum += salary[i]
}
let taxPercentage = 20;
percentageOfAllSalaries = sum / 100 * taxPercentage;
console.log(percentageOfAllSalaries);
let staff = 70;
let averagePercentage = Math.floor(percentageOfAllSalaries / staff);
console.log(averagePercentage);