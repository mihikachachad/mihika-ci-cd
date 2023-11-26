/**
 * Division
 */
function divide(dividend, divisor) {
    if (divisor === 0) {
       throw new Error('Cannot divide by zero');
    }
   
    return dividend / divisor;
   }
   
   module.exports = divide;