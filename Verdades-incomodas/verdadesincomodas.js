("use strict");
let nombre = prompt("Hola! ¿Cuál es tu nombre?");
let numero = prompt(
  `Hola ${nombre}, tengo unas cuantas verdades incómodas para ti. Dime un número del 1 al 10.`
);
switch (numero) {
  case "1":
    alert("No odias los lunes, odias el Capitalismo.");
    break;
  case "2":
    alert(
      "Si cagas durante diez minutos al día en el trabajo, al cabo del año habrás cobrado 40 horas sólo por cagar"
    );
    break;
  case "3":
    alert(
      "A las personas se las conoce bien con una ración de croquetas impares delante"
    );
    break;
  case "4":
    alert(
      "Cenar hidratos es una barbaridad, es mucho mejor cenar acelgas hervidas y levantarte a las dos de la mañana a comerte una caja de campurrianas"
    );
    break;
  case "5":
    alert("William Shakespeare estaría orgulloso de tus dramas");
    break;
  case "6":
    alert(
      "¿A qué sistema confiarías tu vida? ¿Al Capitalista? ¿Al Comunista? ¿O al Inmunológico?"
    );
    break;
  case "7":
    alert(
      "Estás en esa etapa de la vida en que te emocionas cada vez que se cancela cualquier tipo de plan que involucre salir de tu casa"
    );
    break;
  case "8":
    alert(
      "Todo el mundo odia las matemáticas hasta que ve algo raro en la nómina."
    );
    break;
  case "9":
    alert(
      "Si Adelita se fuera con otro, respetaría su decisión y reflexionaría sobre mis errores. "
    );
    break;
  case "10":
    alert(
      "Con la técnica de no contarle a nadie tus proyectos y planes hasta materializarlos, puedes fracasar sin que nadie se entere"
    );
    break;
  case "11":
    alert(
      `Estar en clase de JS y tener la sensación de que te has confundido de aula en la universidad`
    );
    break;
  default:
    alert("Empezamos mal si no sabes escoger un nÚmero entre el 1 y el 10");
}
