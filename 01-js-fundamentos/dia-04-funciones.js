// ============================================
// DÍA 4: Funciones
// ============================================
// Objetivo: Empaquetar código en bloques reutilizables.
//
// Este es EL tema más importante de JavaScript.
// Todo lo que vas a escribir en React son funciones:
// los componentes son funciones, los eventos reciben
// funciones, los hooks son funciones.
//
// Si entendés bien este día, React después es mucho
// más fácil. Tomate el tiempo que haga falta.
//
// Para ejecutar: node dia-04-funciones.js
// ============================================


// -----------------------------------------------
// 1. QUÉ ES UNA FUNCIÓN Y POR QUÉ EXISTE
// -----------------------------------------------
// Una función es un bloque de código con nombre que
// podés ejecutar cuantas veces quieras.
//
// El problema que resuelve: no repetir código.
// Si el mismo cálculo aparece en 5 lugares y tenés que
// cambiarlo, sin funciones lo cambiás 5 veces (y te
// olvidás de uno). Con función, lo cambiás en 1 lugar.

console.log("--- Mi primera función ---");

// DECLARAR la función (definirla, todavía no hace nada):
function saludar() {
  console.log("¡Hola!");
}

// LLAMAR / INVOCAR la función (ahora sí se ejecuta):
saludar();
saludar();   // la puedo llamar todas las veces que quiera

// ⚠️ Sin los paréntesis NO se ejecuta:
//   saludar;    ← esto solo "menciona" la función, no hace nada
//   saludar();  ← esto la EJECUTA
// Es un error clasiquísimo. Los paréntesis son "ejecutá esto".


// -----------------------------------------------
// 2. PARÁMETROS Y ARGUMENTOS
// -----------------------------------------------
// Una función sirve mucho más si le podés pasar datos.
//
// PARÁMETRO = el nombre que ponés al declararla (la "caja vacía")
// ARGUMENTO = el valor real que le pasás al llamarla

console.log("\n--- Parámetros ---");

function saludarA(nombre) {          // 'nombre' es el PARÁMETRO
  console.log(`¡Hola, ${nombre}!`);
}

saludarA("Matías");                  // "Matías" es el ARGUMENTO
saludarA("Ana");

// Varios parámetros, separados por coma. El ORDEN importa:
function presentar(nombre, edad, ciudad) {
  console.log(`${nombre}, ${edad} años, de ${ciudad}`);
}

presentar("Matías", 30, "Buenos Aires");

// Si te olvidás un argumento, el parámetro queda `undefined`:
presentar("Ana", 25);     // ciudad → undefined


// -----------------------------------------------
// 3. RETURN — el valor que devuelve la función
// -----------------------------------------------
// Hasta acá las funciones solo imprimían.
// `return` hace que la función DEVUELVA un valor,
// que después podés guardar, usar en un cálculo, etc.
//
// Esta es la diferencia más importante del día:
//   console.log  →  MUESTRA algo en pantalla
//   return       →  DEVUELVE un valor al código que llamó

console.log("\n--- Return ---");

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3);       // resultado vale 8
console.log(resultado);
console.log(sumar(10, 20));          // podés usarla directo
console.log(sumar(1, 2) + sumar(3, 4));   // 3 + 7 = 10

// Compará estas dos:
function sumarQueImprime(a, b) {
  console.log(a + b);                // muestra pero no devuelve
}

function sumarQueDevuelve(a, b) {
  return a + b;                      // devuelve
}

const x = sumarQueImprime(2, 2);     // imprime 4, pero x vale undefined
const y = sumarQueDevuelve(2, 2);    // no imprime nada, pero y vale 4
console.log(`x = ${x}, y = ${y}`);

// ⚠️ `return` CORTA la función. Nada después se ejecuta:
function ejemploReturn() {
  console.log("esto se ejecuta");
  return "listo";
  console.log("esto NUNCA se ejecuta");   // código muerto
}
console.log(ejemploReturn());

// Esto se usa a propósito para salir temprano ("early return"):
function dividir(a, b) {
  if (b === 0) {
    return "No se puede dividir por cero";   // salgo acá mismo
  }
  return a / b;
}

console.log(dividir(10, 2));
console.log(dividir(10, 0));


// -----------------------------------------------
// 4. SCOPE — dónde vive cada variable
// -----------------------------------------------
// Las variables declaradas DENTRO de una función solo
// existen adentro. Afuera no se ven.

console.log("\n--- Scope ---");

const global = "soy visible en todos lados";

function probarScope() {
  const local = "solo existo adentro de la función";
  console.log(global);   // ✅ puedo ver la de afuera
  console.log(local);    // ✅ puedo ver la mía
}

probarScope();
console.log(global);     // ✅ funciona
// console.log(local);   // ❌ ReferenceError: local is not defined

// Cada llamada crea sus propias variables, independientes:
function contar() {
  let cuenta = 0;
  cuenta++;
  return cuenta;
}

console.log(contar());   // 1
console.log(contar());   // 1 otra vez — NO se acumula, arranca de cero

// Esto es bueno: hace que las funciones sean predecibles.
// La misma entrada da siempre la misma salida.


// -----------------------------------------------
// 5. FUNCTION EXPRESSION — funciones como valores
// -----------------------------------------------
// En JS las funciones son valores, como un número o un string.
// Podés guardarlas en una variable.

console.log("\n--- Function expression ---");

const multiplicar = function (a, b) {
  return a * b;
};                                    // ← acá SÍ va punto y coma (es una asignación)

console.log(multiplicar(4, 5));

// Diferencia práctica con `function nombre() {}`:
// las declaraciones se pueden llamar ANTES de escribirlas (hoisting),
// las expresiones NO.

declarada();    // ✅ funciona aunque esté declarada más abajo
function declarada() {
  console.log("soy una declaración, me podés llamar antes");
}

// expresion();  // ❌ ReferenceError: Cannot access before initialization
const expresion = function () {
  console.log("soy una expresión");
};
expresion();    // ✅ acá sí


// -----------------------------------------------
// 6. ARROW FUNCTIONS — la sintaxis moderna
// -----------------------------------------------
// Es la forma que más vas a ver en React. Misma idea,
// escritura más corta.

console.log("\n--- Arrow functions ---");

// Función tradicional:
const dobleTradicional = function (n) {
  return n * 2;
};

// Arrow function equivalente:
const doble = (n) => {
  return n * 2;
};

// Si el cuerpo es UNA sola expresión que se devuelve,
// podés sacar las llaves y el `return` (return implícito):
const dobleCorto = (n) => n * 2;

console.log(dobleTradicional(5), doble(5), dobleCorto(5));   // 10 10 10

// Con varios parámetros, los paréntesis son obligatorios:
const restar = (a, b) => a - b;
console.log(restar(10, 3));

// Sin parámetros, paréntesis vacíos:
const saludoRapido = () => "¡Hola!";
console.log(saludoRapido());

// ⚠️ Si abrís llaves, VOLVÉS a necesitar `return`:
const malo = (n) => { n * 2 };        // devuelve undefined — falta el return
const bueno = (n) => { return n * 2 };
console.log(malo(5), bueno(5));       // undefined 10

// Este es EL error más común con arrow functions. Recordá:
//   sin llaves → return implícito
//   con llaves → return explícito


// -----------------------------------------------
// 7. PARÁMETROS POR DEFECTO
// -----------------------------------------------
// Podés darle un valor de respaldo a un parámetro
// por si no te lo pasan.

console.log("\n--- Parámetros por defecto ---");

function crearUsuario(nombre, rol = "usuario", activo = true) {
  console.log(`${nombre} — rol: ${rol} — activo: ${activo}`);
}

crearUsuario("Matías");                        // usa los dos defaults
crearUsuario("Ana", "admin");                  // pisa el rol
crearUsuario("Beto", "editor", false);         // pisa todo

// Regla: los parámetros con default van SIEMPRE al final.


// -----------------------------------------------
// 8. FUNCIONES QUE RECIBEN FUNCIONES (callbacks)
// -----------------------------------------------
// Como las funciones son valores, podés pasar una función
// como argumento de otra. Esto se llama CALLBACK.
//
// Es la base de todo lo que viene: map, filter, addEventListener,
// los eventos de React... todo funciona así.

console.log("\n--- Callbacks ---");

function aplicarDosVeces(valor, fn) {
  return fn(fn(valor));       // ejecuta fn sobre el valor, dos veces
}

const sumarUno = (n) => n + 1;

console.log(aplicarDosVeces(5, sumarUno));   // 7  (5 → 6 → 7)
console.log(aplicarDosVeces(3, doble));      // 12 (3 → 6 → 12)

// También podés escribir la función ahí mismo, sin nombre:
console.log(aplicarDosVeces(10, (n) => n * 10));   // 1000

// ⚠️ Ojo: se pasa la función SIN paréntesis.
//   aplicarDosVeces(5, sumarUno)     ✅ paso la función
//   aplicarDosVeces(5, sumarUno())   ❌ ejecuto la función y paso su resultado


// ===============================================
// 🏋️ EJERCICIOS — Completá el código
// ===============================================

// EJERCICIO 1: Tu primera función con return
// Instrucción: Escribí una función `areaRectangulo(base, altura)`
// que DEVUELVA el área (base × altura). No uses console.log adentro.
// Después llamala y mostrá el resultado desde afuera.

// Escribí tu código acá abajo:
function areaRectangulo(base, altura){
  return base * altura;
};

console.log(areaRectangulo(10, 12));

// EJERCICIO 2: Refactorizar el Día 2
// Instrucción: Acordate de la calculadora de descuentos del Día 2.
// Convertila en una función `calcularTotal(monto)` que DEVUELVA
// el monto final con el descuento ya aplicado.
//   - Menos de $1000: 0%
//   - $1000 a $4999: 10%
//   - $5000 a $9999: 15%
//   - $10000 o más: 20%
// Probala con: 500, 1200, 7000 y 15000.
// (Esperado: 500, 1080, 5950, 12000)

// Escribí tu código acá abajo:

function calcularTotal(monto){
    let descuento = 0;
    if(monto < 999){
        return monto;
    } else if(monto >= 1000){
        descuento = 0.1;
    } else if(monto >= 4999){
        descuento = 0.15;
    } else {
        descuento = 0.2;
    };
    return monto - (descuento * monto);
};

console.log(calcularTotal(500));


// EJERCICIO 3: Función booleana + bucle
// Instrucción: Escribí `esPar(numero)` que DEVUELVA true o false.
// Tip: `numero % 2 === 0` ya ES un booleano — no necesitás if/else.
// Después usala dentro de un bucle para imprimir los pares del 1 al 20.

// Escribí tu código acá abajo:
function esPar(numero) {
  return numero % 2 === 0;
}

for (let i = 0; i <= 20; i++) {
  console.log(esPar(i));
}

// EJERCICIO 4: Traducir a arrow function
// Instrucción: Reescribí estas tres funciones como arrow functions.
// Usá return implícito donde se pueda.

function aMayusculas(texto) {
  return texto.toUpperCase();
}

function esMayorDeEdad(edad) {
  return edad >= 18;
}

function nombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

// Escribí tus versiones arrow acá abajo (poneles otro nombre para no pisarlas):
const aMayusculas = (texto) => texto.toUpperCase();
const esMayorDeEdad = (edad) => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

// EJERCICIO 5: Parámetros por defecto
// Instrucción: Escribí `formatearPrecio(monto, moneda = "$", decimales = 2)`
// que DEVUELVA un string tipo "$1234.50".
// Tip: usá .toFixed(decimales) sobre el monto.
// Probala con: (1234.5), (1234.5, "US$") y (1234.5, "€", 0)

// Escribí tu código acá abajo:

const formatearPrecio = (monto, moneda = "$", decimales = 2) => `${moneda} ${monto.toFixed(decimales)} `;
console.log(formatearPrecio(1234.5));

// EJERCICIO 6: Refactorizar el Día 3
// Instrucción: Convertí el ejercicio del "producto más caro" en una
// función `masCaro(lista)` que reciba un array y DEVUELVA el objeto
// del producto más caro (el objeto entero, no un string).
// Probala con los dos arrays de abajo — la misma función debe servir
// para los dos. Ese es el punto de las funciones.

const productos = [
  { nombre: "Teclado", precio: 45000 },
  { nombre: "Monitor", precio: 180000 },
  { nombre: "Mouse", precio: 22000 },
];

const libros = [
  { nombre: "Clean Code", precio: 38000 },
  { nombre: "Eloquent JS", precio: 29000 },
  { nombre: "You Don't Know JS", precio: 52000 },
];

// Escribí tu código acá abajo:



// EJERCICIO 7: Predecí la salida (scope)
// Instrucción: ANTES de ejecutar, escribí en un comentario qué creés
// que imprime cada línea. Después descomentá y verificá.
// Este ejercicio es de leer, no de escribir.

let contador = 0;

function incrementar() {
  let contador = 100;      // ⚠️ ojo: hay DOS variables llamadas contador
  contador++;
  return contador;
}

// Tu predicción acá:
// console.log(incrementar()) →
// console.log(contador)      →

// Descomentá para verificar:
// console.log(incrementar());
// console.log(contador);


// EJERCICIO 8 (bonus): Callback propio
// Instrucción: Escribí `procesarLista(lista, fn)` que recorra el array,
// le aplique `fn` a cada elemento, y DEVUELVA un array nuevo con los
// resultados. Usá un bucle y .push() para armar el array nuevo.
// Probala con: procesarLista([1,2,3,4], doble)  →  [2,4,6,8]
//              procesarLista([1,2,3,4], (n) => n * n)  →  [1,4,9,16]
//
// (Spoiler: acabás de reescribir .map(), que vemos el Día 6)

const numeros = [1, 2, 3, 4];

// Escribí tu código acá abajo:



// ===============================================
// Cuando termines, ejecutá: node dia-04-funciones.js
// Después pedile a Claude Code que revise tus respuestas 💬
// ===============================================
