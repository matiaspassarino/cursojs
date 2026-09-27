// ============================================
// DÍA 3: Bucles (Loops)
// ============================================
// Objetivo: Repetir código sin escribirlo mil veces.
// Los bucles son la herramienta que más vas a usar
// cuando trabajes con listas de datos (productos,
// usuarios, posts... todo lo que hace una app real).
//
// Para ejecutar este archivo: abrí la terminal y escribí:
//   node dia-03-bucles.js
// ============================================


// -----------------------------------------------
// 1. FOR — cuando sabés cuántas veces repetir
// -----------------------------------------------
// Sintaxis:
//   for (inicialización; condición; incremento) {
//     // código que se repite
//   }
//
// Se lee así:
//   1) empiezo con i = 0
//   2) ¿i < 5 es true? entonces ejecuto el bloque
//   3) hago i++ y vuelvo al paso 2

console.log("--- For básico ---");

for (let i = 0; i < 5; i++) {
  console.log(`Vuelta número ${i}`);
}

// Fijate que empieza en 0 y termina en 4: son 5 vueltas.
// En programación casi siempre se cuenta desde 0.

// Contar hacia atrás:
for (let i = 3; i > 0; i--) {
  console.log(`Cuenta regresiva: ${i}`);
}
console.log("¡Despegue! 🚀");

// Saltar de a 2:
for (let i = 0; i <= 10; i += 2) {
  console.log(`Par: ${i}`);
}


// -----------------------------------------------
// 2. FOR recorriendo un ARRAY
// -----------------------------------------------
// Un array es una lista ordenada de valores.
// Se accede a cada elemento por su índice: array[0], array[1]...
// .length te dice cuántos elementos tiene.

console.log("\n--- For sobre arrays ---");

const lenguajes = ["JavaScript", "TypeScript", "Python", "Go"];

console.log(lenguajes[0]);        // JavaScript  (el primero es el índice 0)
console.log(lenguajes.length);    // 4           (pero el último índice es 3)

for (let i = 0; i < lenguajes.length; i++) {
  console.log(`${i + 1}. ${lenguajes[i]}`);
}

// ⚠️ La condición es `i < lenguajes.length`, NO `i <= length`.
// Con <= te pasarías del último índice y obtendrías `undefined`.


// -----------------------------------------------
// 3. FOR...OF — la forma moderna de recorrer
// -----------------------------------------------
// Si no necesitás el índice, for...of es más limpio y legible.

console.log("\n--- For...of ---");

for (const lenguaje of lenguajes) {
  console.log(`Quiero aprender ${lenguaje}`);
}

// También funciona con strings (recorre letra por letra):
for (const letra of "Hola") {
  console.log(letra);
}

// ¿Y si necesitás el índice igual? Usá .entries()
for (const [indice, lenguaje] of lenguajes.entries()) {
  console.log(`Índice ${indice}: ${lenguaje}`);
}


// -----------------------------------------------
// 4. WHILE — cuando NO sabés cuántas veces
// -----------------------------------------------
// Repite MIENTRAS la condición sea true.
// Se usa cuando el final depende de algo que pasa adentro del bucle.

console.log("\n--- While ---");

let saldo = 100;
let dia = 0;

while (saldo > 0) {
  saldo -= 30;
  dia++;
  console.log(`Día ${dia}: me quedan $${saldo}`);
}

// ⚠️ PELIGRO: si la condición nunca se vuelve false, el bucle
// corre para siempre y te congela el programa (bucle infinito).
// Siempre asegurate de que algo adentro modifique la condición.
//
// Esto colgaría tu programa (NO lo descomentes):
//   let x = 1;
//   while (x > 0) { console.log("ayuda"); }


// -----------------------------------------------
// 5. DO...WHILE — ejecuta al menos una vez
// -----------------------------------------------
// La diferencia: primero ejecuta, DESPUÉS pregunta.
// Se usa poco, pero conviene saber que existe.

console.log("\n--- Do...while ---");

let intentos = 0;

do {
  intentos++;
  console.log(`Intento ${intentos}`);
} while (intentos < 3);

// Aunque la condición sea false desde el principio, corre 1 vez:
let numero = 100;
do {
  console.log(`Esto se imprime igual, numero vale ${numero}`);
} while (numero < 10);


// -----------------------------------------------
// 6. BREAK y CONTINUE — controlar el bucle por dentro
// -----------------------------------------------
// break    → corta el bucle y sale
// continue → salta a la siguiente vuelta

console.log("\n--- Break y Continue ---");

// break: buscar algo y frenar apenas lo encontrás
const usuarios = ["ana", "beto", "carla", "diego"];

for (const usuario of usuarios) {
  console.log(`Revisando a ${usuario}...`);
  if (usuario === "carla") {
    console.log("¡Encontrada! Dejo de buscar.");
    break;
  }
}

// continue: saltear casos que no te interesan
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;   // si es impar, saltealo
  console.log(`Solo pares: ${i}`);
}

// El operador % (módulo) devuelve el RESTO de una división.
// 10 % 2 === 0  →  10 es par
// 7  % 2 === 1  →  7 es impar
// Es un truco que vas a usar muchísimo.


// -----------------------------------------------
// 7. BUCLES ANIDADOS
// -----------------------------------------------
// Un bucle adentro de otro. El de adentro corre completo
// por CADA vuelta del de afuera.

console.log("\n--- Bucles anidados ---");

for (let fila = 1; fila <= 3; fila++) {
  let linea = "";
  for (let columna = 1; columna <= 3; columna++) {
    linea += `[${fila},${columna}] `;
  }
  console.log(linea);
}

// Ojo: si el de afuera hace 1000 vueltas y el de adentro 1000,
// son 1.000.000 de ejecuciones. Los bucles anidados se pagan caro.


// ===============================================
// 🏋️ EJERCICIOS — Completá el código
// ===============================================

// EJERCICIO 1: Tabla de multiplicar
// Instrucción: Imprimí la tabla del 7, del 1 al 10.
// Formato esperado: "7 x 1 = 7", "7 x 2 = 14", etc.

const tabla = 7;

// Escribí tu código acá abajo:
for (let i = 1; i <= 10; i++ ) {
  console.log(`${tabla} x ${i} = ${i * tabla}`);
}


// EJERCICIO 2: Suma y promedio
// Instrucción: Recorré el array y calculá la suma total y el promedio.
// Tip: necesitás una variable acumuladora declarada ANTES del bucle.
// El promedio es la suma dividida por la cantidad de elementos.

const notas = [85, 92, 78, 95, 60, 88];

// Escribí tu código acá abajo:

let suma = 0;

for (const nota of notas) {
    suma += nota;
}

console.log(`la suma total es ${suma}. El promedio es ${suma / notas.length}`);


// EJERCICIO 3: El más caro
// Instrucción: Encontrá el producto más caro del array y mostrá
// su nombre y su precio. NO uses Math.max — hacelo con un bucle.
// Tip: guardá un "campeón" y reemplazalo cada vez que encuentres uno mayor.

const productos = [
  { nombre: "Teclado", precio: 45000 },
  { nombre: "Monitor", precio: 180000 },
  { nombre: "Mouse", precio: 22000 },
  { nombre: "Auriculares", precio: 95000 },
];

// Para acceder a un objeto del array: productos[0].nombre → "Teclado"
// Escribí tu código acá abajo:

let campeon = productos[0];

for (const producto of productos){
    if (producto.precio > campeon.precio){
        campeon = producto;
    }
}

console.log(`El producto más caro es ${campeon.nombre} y cuesta ${campeon.precio}`);

// EJERCICIO 4: FizzBuzz (clásico de entrevistas técnicas)
// Instrucción: Recorré del 1 al 30 e imprimí:
// - "FizzBuzz" si el número es divisible por 3 Y por 5
// - "Fizz" si es divisible por 3
// - "Buzz" si es divisible por 5
// - el número, en cualquier otro caso
// Tip: usá % y prestá atención al ORDEN de las condiciones.

// Escribí tu código acá abajo:

for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz");
    } else if ( i % 5 === 0) {
        console.log("Buzz");
    } else if ( i % 3 === 0 ){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// EJERCICIO 5: Filtrar con continue
// Instrucción: Recorré el array de cuentas e imprimí solo las activas
// que tengan 18 años o más. Usá `continue` para saltear las que no cumplen.

const cuentas = [
  { nombre: "Ana", edad: 25, activo: true },
  { nombre: "Beto", edad: 17, activo: true },
  { nombre: "Carla", edad: 30, activo: false },
  { nombre: "Diego", edad: 19, activo: true },
  { nombre: "Elena", edad: 15, activo: false },
];

// Escribí tu código acá abajo:

for (const cuenta of cuentas){
    if (cuenta.edad < 18 || !cuenta.activo) {
      continue;
    }
    console.log(`Cuenta activa mayor de 18: ${cuenta.nombre}`);
  }


// EJERCICIO 6: Pirámide de asteriscos (bucles anidados)
// Instrucción: Imprimí una pirámide de 5 filas así:
//   *
//   **
//   ***
//   ****
//   *****
// Tip: armá un string en cada fila del bucle externo.

const filas = 5;

// Escribí tu código acá abajo:

for (let fila = 1; fila <= filas; fila++) {
  let linea = "";
  for (let i = 0; i < fila; i++) {
    linea += "*";
  }
  console.log(linea);
}

// ===============================================
// Cuando termines, ejecutá: node dia-03-bucles.js
// Después pedile a Claude Code que revise tus respuestas 💬
// ===============================================
