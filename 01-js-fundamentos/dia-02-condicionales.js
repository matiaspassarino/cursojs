// ============================================
// DÍA 2: Condicionales y Lógica
// ============================================
// Objetivo: Aprender a tomar decisiones en el código.
// Tu programa va a poder hacer cosas diferentes
// según las condiciones que se cumplan.
//
// Para ejecutar este archivo: abrí la terminal y escribí:
//   node dia-02-condicionales.js
// ============================================


// -----------------------------------------------
// 1. IF / ELSE — La base de las decisiones
// -----------------------------------------------
// Sintaxis:
//   if (condición) {
//     // se ejecuta si la condición es true
//   } else {
//     // se ejecuta si la condición es false
//   }

const edad = 20;

if (edad >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}

// Podés tener solo if, sin else:
const hora = 8;
if (hora < 12) {
  console.log("Buenos días!");
}


// -----------------------------------------------
// 2. ELSE IF — Múltiples condiciones
// -----------------------------------------------
// Cuando tenés más de 2 opciones, usás else if

const temperatura = 32;

if (temperatura >= 35) {
  console.log("Hace mucho calor 🔥");
} else if (temperatura >= 25) {
  console.log("Está lindo, hace calor");
} else if (temperatura >= 15) {
  console.log("Está templado");
} else if (temperatura >= 5) {
  console.log("Hace frío");
} else {
  console.log("¡Está helando!");
}

// IMPORTANTE: JavaScript evalúa las condiciones DE ARRIBA A ABAJO
// y se detiene en la PRIMERA que sea true.
// Por eso el orden importa.


// -----------------------------------------------
// 3. OPERADORES LÓGICOS — Combinar condiciones
// -----------------------------------------------
console.log("\n--- Operadores Lógicos ---");

// && (AND) — las DOS condiciones deben ser true
const tieneEntrada = true;
const tieneDNI = true;

if (tieneEntrada && tieneDNI) {
  console.log("Podés entrar al evento");
}

// || (OR) — al menos UNA condición debe ser true
const esEstudiante = true;
const esJubilado = false;

if (esEstudiante || esJubilado) {
  console.log("Tenés descuento");
}

// ! (NOT) — invierte el valor
const estaLloviendo = false;

if (!estaLloviendo) {
  console.log("No está lloviendo, podés salir");
}

// Combinando operadores:
const edadUsuario = 25;
const tienePermiso = true;

if (edadUsuario >= 18 && tienePermiso) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}


// -----------------------------------------------
// 4. VALORES TRUTHY y FALSY
// -----------------------------------------------
// En JavaScript, TODOS los valores pueden evaluarse como true o false.
// Esto es útil para verificar si algo existe o tiene contenido.

console.log("\n--- Truthy y Falsy ---");

// FALSY (se evalúan como false):
//   false, 0, "" (string vacío), null, undefined, NaN

// TRUTHY (se evalúan como true):
//   Todo lo demás: "hola", 42, true, [], {}, etc.

const nombreUsuario = "";

if (nombreUsuario) {
  console.log(`Bienvenido, ${nombreUsuario}`);
} else {
  console.log("No ingresaste tu nombre");
}

// Probá cambiando nombreUsuario a "" (string vacío) y fijate qué pasa

// Ejemplo práctico: verificar si un dato existe
const email = "";

if (email) {
  console.log(`Tu email es: ${email}`);
} else {
  console.log("No proporcionaste email");  // esto se ejecuta porque "" es falsy
}


// -----------------------------------------------
// 5. OPERADOR TERNARIO — if/else en una línea
// -----------------------------------------------
// Sintaxis: condición ? valorSiTrue : valorSiFalse
// Útil para asignaciones simples. No abuses de él.

console.log("\n--- Operador Ternario ---");

const edadCliente = 16;
const tipoEntrada = edadCliente >= 18 ? "Adulto" : "Menor";
console.log(`Tipo de entrada: ${tipoEntrada}`);

// Otro ejemplo:
const puntos = 75;
const aprobado = puntos >= 60 ? "Aprobado" : "Desaprobado";
console.log(`Resultado: ${aprobado}`);

// Se puede usar directo en template literals:
console.log(`Estado: ${puntos >= 60 ? "✅ Aprobado" : "❌ Desaprobado"}`);


// -----------------------------------------------
// 6. SWITCH — Cuando comparás un valor contra muchas opciones
// -----------------------------------------------
// switch es útil cuando tenés muchos else if comparando el MISMO valor

console.log("\n--- Switch ---");

const diaSemana = 3; // 1=Lunes, 2=Martes, ..., 7=Domingo

switch (diaSemana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado - fin de semana!");
    break;
  case 7:
    console.log("Domingo - fin de semana!");
    break;
  default:
    console.log("Número inválido, debe ser 1-7");
}

// ⚠️ MUY IMPORTANTE: No te olvides del `break` en cada case.
// Sin break, el código sigue ejecutando los siguientes cases (se llama "fall-through").

// Ejemplo de fall-through intencional (agrupar cases):
const mes = 11; // Abril

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Es invierno (hemisferio norte) / verano (hemisferio sur)");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Es primavera (hemisferio norte) / otoño (hemisferio sur)");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Es verano (hemisferio norte) / invierno (hemisferio sur)");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Es otoño (hemisferio norte) / primavera (hemisferio sur)");
    break;
  default:
    console.log("Mes inválido");
}


// ===============================================
// 🏋️ EJERCICIOS — Completá el código
// ===============================================

// EJERCICIO 1: Clasificador de edad
// Instrucción: Según la edad, imprimí la categoría correcta.
// - 0-12: "Niño"
// - 13-17: "Adolescente"
// - 18-64: "Adulto"
// - 65+: "Adulto mayor"

const edadPersona = 77;

// Escribí tu código acá abajo:

let categoria;

if (edadPersona <= 12) {
  categoria = "Niño";
} else if (edadPersona <= 17) {
  categoria = "Adolescente";
} else if (edadPersona <= 64) {
  categoria = "Adulto";
} else {
  categoria = "Adulto mayor";
}

// Descomentá cuando termines:
console.log(`Edad ${edadPersona}: ${categoria}`);


// EJERCICIO 2: Calculadora de descuentos
// Instrucción: Según el monto de la compra, aplicá el descuento:
// - Menos de $1000: sin descuento (0%)
// - $1000 a $4999: 10% de descuento
// - $5000 a $9999: 15% de descuento
// - $10000 o más: 20% de descuento
// Imprimí el monto original, el descuento y el monto final.

const montoCompra = 1200;

// Escribí tu código acá abajo:
let descuento;

if (montoCompra < 1000) {
  descuento = 0;
} else if (montoCompra <= 4999 ) {
  descuento = 0.1;
} else if (montoCompra <= 9999 ) {
  descuento = 0.15;
} else {
  descuento = 0.20;
}

let descuentoNumero = descuento * montoCompra;
let precioFinal = montoCompra - descuentoNumero;
console.log(`
  Total de compra: $ ${montoCompra}
  Descuento: ${descuento*100}%
  Total a pagar: $ ${precioFinal}
  `);

// EJERCICIO 3: Verificador de contraseña
// Instrucción: Una contraseña es válida si cumple AMBAS condiciones:
//   1. Tiene 8 o más caracteres (usá .length)
//   2. Contiene al menos un número (usá .match(/[0-9]/) — devuelve null si no hay)
// Imprimí si la contraseña es válida o no, y si no, qué le falta.

const password = "hola4";

// Escribí tu código acá abajo:
if (password.match(/[0-9]/) && password.length >= 8) {
  console.log("Contraseña válida");
} else {
  if (password.length < 8) console.log("Le faltan caracteres (mínimo 8)");
  if (!password.match(/[0-9]/)) console.log("Debe contener al menos un número");
}


// EJERCICIO 4: Sistema de notas con switch
// Instrucción: Dada una nota numérica (0-100), asigná una letra:
// - 90-100: "A"
// - 80-89: "B"
// - 70-79: "C"
// - 60-69: "D"
// - Menos de 60: "F"
// Tip: Podés usar Math.floor(nota / 10) para obtener la decena y hacer switch sobre eso.

const nota = 85;

// Escribí tu código acá abajo:

let redondeo = Math.floor(nota / 10);

switch (redondeo) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// EJERCICIO 5: ¿Puedo salir?
// Instrucción: Usá operadores lógicos para determinar si podés salir de casa.
// Condiciones para salir:
//   - NO debe estar lloviendo
//   - Debe haber terminado de estudiar O ser fin de semana
// Imprimí "¡Podés salir!" o "Mejor quedate en casa"

const llueve = true;
const terminoDeEstudiar = true;
const esFinDeSemana = false;

// Escribí tu código acá abajo:
if (!llueve && (terminoDeEstudiar || esFinDeSemana)) {
  console.log("¡Podés salir!");
} else {
  console.log("Mejor quedate en casa");
}

// ===============================================
// Cuando termines, ejecutá: node dia-02-condicionales.js
// Después pedile a Claude Code que revise tus respuestas 💬
// ===============================================
