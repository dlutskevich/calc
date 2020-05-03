function sum(num, num1, oper) {
    switch (oper) {
        case "+": {
            return num + num1;
        }
        case "-": {
            return num - num1;
        }
        case "*": {
            return num * num1;
        }
        case "/": {
            return num / num1;
        }

        default: {
            alert("Неправильно, попробуй еще раз");
        }
    }
}

const num = parseInt(prompt("Введите первое число"));
const num1 = parseInt(prompt("Введите второе число"));
const oper = prompt("Введите оператор +, -, /, *");

let result = sum(num, num1, oper);
alert(result);
