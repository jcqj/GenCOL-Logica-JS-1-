//! Mapeamos los 3 numeros ingresados:
const mostrarUno = document.getElementById("num1")
const mostrarDos = document.getElementById("num2")
const mostrarTres = document.getElementById("num3")

//! Mapeamos los campos para mostrar en el HTML (7)
const mostrarMayor = document.querySelector(".numMayor")
const mostrarCentro = document.querySelector(".numCentro")
const mostrarMenor = document.querySelector(".numMenor")

const mostrarMayor1 = document.querySelector(".numMayor1")
const mostrarCentro1 = document.querySelector(".numCentro1")
const mostrarMenor1 = document.querySelector(".numMenor1")

const mostrarIguales = document.getElementById("sonIguales")


// let num1
// let num2
// let num3
//! Pedimos los numeros mediante PROMPT.
// do {
//     alert("Ingrese NUMEROS para avanzar")
//     num1 = Number(prompt("Ingrese el primer valor"))
//     num2 = Number(prompt("Ingrese el segundo valor"))
//     num3 = Number(prompt("Ingrese el tercer valor"))
// } while (Number.isInteger(num1) == false || Number.isInteger(num2) == false || Number.isInteger(num3) == false);

// console.log(Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3))

let num1 = 9
let num2 = 4
let num3 = 9

mostrarUno.textContent = num1
mostrarDos.textContent = num2
mostrarTres.textContent = num3


if (num1 == num2 && num1 == num3) {
    console.log(`Los numeros son iguales`);
    mostrarIguales.textContent = "Los numeros son iguales"
    mostrarIguales.style.color = "green"
    mostrarMayor.textContent = num1
    mostrarCentro.textContent = num2
    mostrarMenor.textContent = num3
    mostrarMayor1.textContent = num1
    mostrarCentro1.textContent = num2
    mostrarMenor1.textContent = num3
}

else if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        console.log(`${num1} es el numero mayor`);
        console.log(`${num2} es el numero centro`);
        console.log(`${num3} es el numero menor`);
        mostrarMayor.textContent = num1
        mostrarCentro.textContent = num2
        mostrarMenor.textContent = num3
        mostrarMayor1.textContent = num1
        mostrarCentro1.textContent = num2
        mostrarMenor1.textContent = num3
    }
    else if (num3 >= num2) {
        console.log(`${num1} es el numero mayor`);
        console.log(`${num3} es el numero centro`);
        console.log(`${num2} es el numero menor`);
        mostrarMayor.textContent = num1
        mostrarCentro.textContent = num3
        mostrarMenor.textContent = num2
        mostrarMayor1.textContent = num1
        mostrarCentro1.textContent = num3
        mostrarMenor1.textContent = num2
    }
}

else if (num2 >= num3 && num2 >= num1) {
    if (num3 >= num1) {
        console.log(`${num2} es el numero mayor`);
        console.log(`${num3} es el numero centro`);
        console.log(`${num1} es el numero menor`);
        mostrarMayor.textContent = num2
        mostrarCentro.textContent = num3
        mostrarMenor.textContent = num1
        mostrarMayor1.textContent = num2
        mostrarCentro1.textContent = num3
        mostrarMenor1.textContent = num1
    }
    else if (num1 >= num3) {
        console.log(`${num2} es el numero mayor`);
        console.log(`${num1} es el numero centro`);
        console.log(`${num3} es el numero menor`);
        mostrarMayor.textContent = num2
        mostrarCentro.textContent = num1
        mostrarMenor.textContent = num3
        mostrarMayor1.textContent = num2
        mostrarCentro1.textContent = num1
        mostrarMenor1.textContent = num3
    }
}

else if (num3 >= num2 && num3 >= num1) {
    if (num2 >= num1) {
        console.log(`${num3} es el numero mayor`);
        console.log(`${num2} es el numero centro`);
        console.log(`${num1} es el numero menor`);
        mostrarMayor.textContent = num3
        mostrarCentro.textContent = num2
        mostrarMenor.textContent = num1
        mostrarMayor1.textContent = num3
        mostrarCentro1.textContent = num2
        mostrarMenor1.textContent = num1
    }
    else if (num1 >= num2) {
        console.log(`${num3} es el numero mayor`);
        console.log(`${num1} es el numero centro`);
        console.log(`${num2} es el numero menor`);
        mostrarMayor.textContent = num3
        mostrarCentro.textContent = num1
        mostrarMenor.textContent = num2
        mostrarMayor1.textContent = num3
        mostrarCentro1.textContent = num1
        mostrarMenor1.textContent = num2
    }
}