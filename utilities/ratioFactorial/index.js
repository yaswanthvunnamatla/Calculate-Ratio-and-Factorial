let factorialOfNumber = require('../factorial/index');
let ratioOfTwoNumbers = require('../ratio/index');
function ratioAndFactorial(num1,num2,num3){
    const ratio = ratioOfTwoNumbers(num1,num2);
    const factorial = factorialOfNumber(num3);
    return {ratio, factorial}
}
module.exports = ratioAndFactorial;
