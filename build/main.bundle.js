(() => {
    var operations = {
      230: (e, t) => { return e + t },
      996: (e, t) => {
        if (t === 0) throw new Error("Cannot divide by zero");
        return e / t;
      },
      841: (e, t) => { return e * t },
      193: (e, t) => { return e - t }
    };
  
    var cache = {};
  
    function executeOperation(operationId) {
      var cachedResult = cache[operationId];
      if (cachedResult !== undefined) return cachedResult;
  
      var operation = cache[operationId] = { exports: {} };
  
      operations[operationId](operation, operation.exports, executeOperation);
  
      return operation.exports;
    }
  
    (() => {
      var add = executeOperation(230),
          subtract = executeOperation(193),
          multiply = executeOperation(841),
          divide = executeOperation(996);
  
      function calculate() {
        var result,
            firstNumber = parseInt(document.getElementById("firstnumber").value),
            secondNumber = parseInt(document.getElementById("secondnumber").value),
            operator = document.getElementById("operator").value,
            resultElement = document.getElementById("result");
  
        try {
          switch (operator) {
            case "add": result = add(firstNumber, secondNumber); break;
            case "subtract": result = subtract(firstNumber, secondNumber); break;
            case "multiply": result = multiply(firstNumber, secondNumber); break;
            case "divide": result = divide(firstNumber, secondNumber); break;
            default: alert("Error!");
          }
  
          resultElement.textContent = "Result: " + result;
          resultElement.style.color = "black";
        } catch (e) {
          resultElement.textContent = "Error: " + e.message;
          resultElement.style.color = "red";
        }
      }
  
      window.onload = function () {
        document.getElementById("calculateBtn").addEventListener("click", calculate);
      };
    })();
  })();
  