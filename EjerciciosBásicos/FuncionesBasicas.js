'use strict';

function sumarDosCifras(a, b) {
  let resultado = a + b;
  return resultado;
}

sumarDosCifras(2, 3);

function multiplicarDosCifras(a, b) {
  let resultado = a * b;
  return resultado;
}

multiplicarDosCifras(4, 7);

let conjuntoOperaciones = multiplicarDosCifras(2, 3) + sumarDosCifras(3, 2);
console.log(conjuntoOperaciones);

let resultado = sumarDosCifras(100, 25);
console.log(resultado);

console.log('La suma de las dos cifras es ' + sumarDosCifras(100, 25));

function numeroMayor(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (a > b) {
    console.log(`El número mayor es el  + ${a}`);
  }
  if (a < b) {
    console.log(`El número mayor es el  ${b}`);
  } else console.log('Ambos son iguales');
}

numeroMayor(2, 2);

function nombreCompleto(nombre, apellido1, apellido2) {
  console.log(`Mi nombre completo es ${nombre}  ${apellido1}  ${apellido2}`);
}

nombreCompleto('Isabel', 'Sánchez', 'Torrón');
nombreCompleto('Santiago', 'Fernández', 'Miguez');
