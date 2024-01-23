//DESAFIOS
/*
------------------------------------------------------------------------------------
Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
------------------------------------------------------------------------------------
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
------------------------------------------------------------------------------------
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
------------------------------------------------------------------------------------
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguajes() {
    return console.log(lenguajesDeProgramacion);
}
------------------------------------------------------------------------------------
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function reverseList() {
    return console.log(lenguajesDeProgramacion.reverse());
}
------------------------------------------------------------------------------------
Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumeros = [10, 15, 20, 25, 30];

function calcularPromedio(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total / lista.length;
}

let promedio = calcularPromedio(listaNumeros);
console.log("El promedio es:", promedio);
------------------------------------------------------------------------------------
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function mostrarMinMax(lista) {

    let min = lista[0];
    let max = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) {
            min = lista[i];
        }
        if (lista[i] > max) {
            max = lista[i];
        }
    }

    console.log("Número más pequeño:", min);
    console.log("Número más grande:", max);
}


let numerosEjemplo = [10, 5, 25, 8, 15];
mostrarMinMax(numerosEjemplo);

------------------------------------------------------------------------------------
Crea una función que devuelva la suma de todos los elementos en una lista.

function calcularSuma(lista) {

    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }

    return suma;
}


let numerosEjemplo = [10, 5, 25, 8, 15];
let sumaTotal = calcularSuma(numerosEjemplo);
console.log("La suma de los números es:", sumaTotal);


------------------------------------------------------------------------------------
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarPosicion(elemento, lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Retorna la posición si se encuentra el elemento
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

// Ejemplo de uso:
let numerosEjemplo = [10, 5, 25, 8, 15];
let posicion = encontrarPosicion(25, numerosEjemplo);
console.log("La posición del elemento es:", posicion);


------------------------------------------------------------------------------------
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.log("Las listas deben tener la misma longitud.");
        return;
    }

    let resultado = [];

    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }

    return resultado;
}

// Ejemplo de uso:
let listaA = [1, 2, 3, 4];
let listaB = [5, 6, 7, 8];
let resultadoSuma = sumarListas(listaA, listaB);
console.log("La lista resultante de la suma es:", resultadoSuma);

------------------------------------------------------------------------------------
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function obtenerCuadrados(lista) {
    let cuadrados = [];

    for (let i = 0; i < lista.length; i++) {
        cuadrados.push(lista[i] * lista[i]);
    }

    return cuadrados;
}

// Ejemplo de uso:
let numerosEjemplo = [1, 2, 3, 4];
let cuadrados = obtenerCuadrados(numerosEjemplo);
console.log("La lista de cuadrados es:", cuadrados);

------------------------------------------------------------------------------------
*/
