function multiplicarPor2(num) {
    return num * 2;
};

function esPar(num) {
    // si el número es par (divisible por 2) devuelve true
    return num % 2 == 0;
};

function menorQue0(num) {
    return num < 0;
};

export { multiplicarPor2, esPar, menorQue0 }