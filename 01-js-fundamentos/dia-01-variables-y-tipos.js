// ============================================
// DÍA 1: Variables y Tipos de Datos
// ============================================
// Objetivo: Entender cómo guardar información en JavaScript
// y los diferentes tipos de datos que existen.
//
// Para ejecutar este archivo: abrí la terminal y escribí:
//   node dia-01-variables-y-tipos.js
// ============================================


// -----------------------------------------------
// 1. VARIABLES: las "cajas" donde guardamos datos
// -----------------------------------------------

// En JS moderno usamos `let` y `const` (NO usamos `var`)

// `const` = valor que NO va a cambiar (constante)
const nombre = "Matías";
const añoNacimiento = 1990;  // cambiá esto por tu año real

// `let` = valor que SÍ puede cambiar
let edad = 2026 - añoNacimiento;
let ciudad = "Córdoba";  // cambiá por tu ciudad

console.log("Hola, soy " + nombre + " y tengo " + edad + " años");
console.log("Vivo en " + ciudad);

// ¿Por qué NO usar `var`?
// `var` tiene problemas de alcance (scope) que causan bugs.
// Regla simple: usá `const` siempre que puedas, `let` solo si necesitás reasignar.


// -----------------------------------------------
// 2. TIPOS DE DATOS primitivos
// -----------------------------------------------

// String (texto) — siempre entre comillas
const saludo = "Hola mundo";
const otroSaludo = 'También funciona con comillas simples';

// Number (números) — enteros y decimales, sin comillas
const temperatura = 22.5;
const cantidadDeProyectos = 0;

// Boolean (verdadero/falso) — solo dos valores posibles
const estaEstudiando = true;
const yaConsiguioEmpleo = false;

// Undefined — variable declarada pero sin valor
let trabajoActual;
console.log(trabajoActual); // undefined

// Null — "vacío intencional"
const experienciaPrevia = null; // decidimos que está vacío

// Veamos los tipos con `typeof`
console.log("\n--- Tipos de datos ---");
console.log("nombre:", typeof nombre);           // string
console.log("edad:", typeof edad);               // number
console.log("estaEstudiando:", typeof estaEstudiando);  // boolean
console.log("trabajoActual:", typeof trabajoActual);    // undefined
console.log("experienciaPrevia:", typeof experienciaPrevia); // object (¡bug histórico de JS!)


// -----------------------------------------------
// 3. TEMPLATE LITERALS (backticks) — ES6+
// -----------------------------------------------
// En vez de concatenar con +, usamos backticks (`) y ${variable}

const presentacion = `Hola, soy ${nombre}, tengo ${edad} años y vivo en ${ciudad}`;
console.log("\n" + presentacion);

// También permiten múltiples líneas:
const mensaje = `
  Estudiante: ${nombre}
  Objetivo: Frontend Developer
  Estudiando: ${estaEstudiando ? "Sí" : "No"}
`;
console.log(mensaje);


// -----------------------------------------------
// 4. OPERADORES BÁSICOS
// -----------------------------------------------
console.log("--- Operadores ---");

// Aritméticos
console.log("Suma: 10 + 3 =", 10 + 3);       // 13
console.log("Resta: 10 - 3 =", 10 - 3);       // 7
console.log("Multiplicación: 10 * 3 =", 10 * 3); // 30
console.log("División: 10 / 3 =", 10 / 3);     // 3.333...
console.log("Módulo: 10 % 3 =", 10 % 3);       // 1 (resto)
console.log("Potencia: 2 ** 3 =", 2 ** 3);     // 8

// Comparación (SIEMPRE usá === en vez de ==)
console.log("\n--- Comparación ---");
console.log("5 === 5:", 5 === 5);         // true
console.log("5 === '5':", 5 === "5");     // false (distinto tipo)
console.log("5 == '5':", 5 == "5");       // true (¡por eso NO usamos ==!)
console.log("5 !== 3:", 5 !== 3);         // true
console.log("10 > 5:", 10 > 5);           // true
console.log("10 <= 10:", 10 <= 10);       // true


// ===============================================
// 🏋️ EJERCICIOS — Completá el código
// ===============================================

// EJERCICIO 1: Creá tus propias variables
// Instrucción: Declará las siguientes variables con valores reales sobre vos

const miNombre = "Matías";
const miEdad = 35;
let lenguajeFavorito = "JavaScript";
const horasDeEstudioPorDia = 4;

// Descomentá la línea de abajo cuando las completes:
console.log(`\nMe llamo ${miNombre}, tengo ${miEdad} años, me gusta ${lenguajeFavorito} y estudio ${horasDeEstudioPorDia}hs por día`);


// EJERCICIO 2: Calculá tu experiencia futura
// Instrucción: Si estudiás 3.5 horas por día, ¿cuántas horas habrás estudiado en 46 semanas?

const horasPorDia = 3.5;
const diasPorSemana = 5; // ¿cuántos días vas a estudiar por semana?
const semanasTotales = 46;
const totalHoras = horasPorDia * diasPorSemana * semanasTotales;     // calculalo multiplicando
console.log(`En 46 semanas voy a haber estudiado ${totalHoras} horas`);


// EJERCICIO 3: typeof detective
// Instrucción: Predecí qué va a imprimir cada `typeof` ANTES de ejecutar

console.log(typeof 42);          //number
console.log(typeof "42");        //string 
console.log(typeof true);        //boolean 
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object


// EJERCICIO 4: Template literal
// Instrucción: Creá un template literal que muestre un "carnet de estudiante"
// con nombre, edad, stack (React/Next.js/TypeScript), y fecha de inicio

const stack = "React/Next.js/TypeScript";
const inicio = "08/04/2026";

const carnet = `Carnet de estudiante para ${miNombre} de ${miEdad}. Stack a estudiar: ${stack} comenzando el día ${inicio}`;
console.log(carnet);


// ===============================================
// Cuando termines, ejecutá: node dia-01-variables-y-tipos.js
// Después pedile a Claude Code que revise tus respuestas 💬
// ===============================================

