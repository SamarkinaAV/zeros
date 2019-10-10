module.exports = function zeros(expression) {
    let arrayWithDoubleFac = expression.match(/([0-9]+\!\!)/g);
    if (arrayWithDoubleFac !== null) {
      arrayWithDoubleFac.forEach(function (element) {
        let indexElement = expression.indexOf(element);
        let subStringStart = expression.slice(0, indexElement);
        let lengthElement = element.length;
        let subStringEnd = expression.slice(indexElement + lengthElement, expression.length);
        expression = subStringStart + subStringEnd;
      });
    }
    let arrayWithFac = expression.match(/([0-9]+\!)/g);
    let result = BigInt(1);
    if (arrayWithDoubleFac !== null) {
      arrayWithDoubleFac.forEach(function (element) {
        // console.log(element);
        let clearNumber = BigInt(parseInt(element), 10);
        //  console.log(clearNumber);
        if (clearNumber % BigInt(2) === BigInt(0)) {
          result *= factorialChet(clearNumber);
          // console.log(result);
        } else {
          result *= factorialNeChet(clearNumber);
          // console.log(result);
        }
      });
    }
    if (arrayWithFac !== null) {
      arrayWithFac.forEach(function (element) {
        // console.log(element);
        let clearNumber = BigInt(parseInt(element), 10);
        //  console.log(clearNumber);
        result *= factorial(clearNumber);
      });
    }
    // console.log (result);
    let resultString = String(result);
    let reversed = reverseString(resultString);
    // console.log (reversed);
    let numberZeros = 0;
    for (let indexZero = 0; indexZero <= reversed.length; indexZero++) {
      if (reversed[indexZero] == 0) {
        numberZeros = numberZeros + 1;
      } else {
        break;
      }
    };
    // console.log (numberZeros);
    return numberZeros;
  }
 
  function factorial(digit) {
    return (digit != BigInt(1)) ? digit * factorial(digit - BigInt(1)) : BigInt(1);
  }
  
  function factorialChet(digit) {
    return (digit != BigInt(2)) ? digit * factorialChet(digit - BigInt(2)) : BigInt(2);
  }
  
  function factorialNeChet(digit) {
    return (digit != BigInt(1)) ?
      digit * factorialNeChet(digit - BigInt(2)) :
      BigInt(1);
  }
  
  function reverseString(str) {
    if (str === "") // Условие выхода из рекурсии
      return "";
  
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  
  // expression (5!*7!*6!!*7!!) 
  // arrayWithDoubleFac (6!!, 7!!)
  // expression (5!*7!**)
  // arrayWithFac (5!,7!)
  // result 3 048 192 000
  // numberZeros 3
  
  // 1. Найти все вхождения чисел с !! в строке и сохранить массив
  // 2. Перебрать элементы массива на их наличие в строке 
  // 3. Если элемент массива есть в строке - то его надо вырезать, если нет - ничего не происходит
  // 4. Найти все вхождения чисел с ! в строке и сохранить массив
  // 4.2 Создать переменную result = 1, для сохранения результата умножения факториала
  // 5. Перебрать элементы массива arrayWithDoubleFac
  // 6. Преобразовать элемент с !! в чистое число
  // 7. Проверить четное число или нет
  // 8. Если четное, то использовать умножение по формуле на примере числа 6: 2*4*6
  // 9. Иначе использовать умножение по формуле на примере числа 7: 1*3*5*7
  // 10.Умножить результат факториала на переменную result
  // 11. Перебрать элементы массива arrayWithFac
  // 12. Преобразовать элемент с ! в чистое число
  // 13. Посчитать результат умножения факториала числа на примере числа 5:1*2*3*4*5
  // 14. Умножить результат факториала на переменную result
  // 15. Сделать переменную result строкой
  // 16. Переменную result переворачиваем с конца (используем реверс)
  // 16.2 Создать переменную numberZeros = 0, для сохранения результата количества нулей
  // 17. Перебираем элементы строки на наличие 0
  //  - Берем текущий элемент строки и сравниваем с 0. 
  //  - Если true, то переменную numberZeros увеличиваем на 1 (++1)
  //  - Иначе false закончить перебор
  // 18. Выводим переменную numberZeros

