// ============================================
// DÍA 5: Arrays y Objetos
// ============================================
// Objetivo: Dominar las dos estructuras con las que
// se guardan TODOS los datos de una app.
//
// Ya los venís usando (productos, notas, libros...),
// pero hoy los vemos a fondo:
//   ARRAY  → una LISTA ordenada de cosas    [ ... ]
//   OBJETO → una COSA con propiedades       { ... }
//
// En una app real casi todo es una combinación de los dos:
// una lista de usuarios = un array de objetos.
// Lo que te devuelve una API = arrays y objetos.
// El estado de un componente de React = arrays y objetos.
//
// Para ejecutar: node dia-05-arrays-y-objetos.js
// ============================================


// -----------------------------------------------
// 1. ARRAYS — crear, leer y modificar
// -----------------------------------------------
// Un array es una lista ordenada. Cada elemento tiene
// una POSICIÓN (índice) que arranca en 0.

console.log("--- Arrays básicos ---");

const frutas = ["manzana", "banana", "naranja"];
//                  0          1          2      ← índices

console.log(frutas[0]);              // "manzana"
console.log(frutas[2]);              // "naranja"
console.log(frutas.length);          // 3 — la CANTIDAD de elementos

// El último elemento siempre es length - 1:
console.log(frutas[frutas.length - 1]);   // "naranja"
// Forma moderna, más corta:
console.log(frutas.at(-1));               // "naranja"

// Si pedís una posición que no existe → undefined (no error):
console.log(frutas[10]);             // undefined

// Modificar un elemento por su índice:
frutas[1] = "frutilla";
console.log(frutas);                 // ["manzana", "frutilla", "naranja"]

// ⚠️ ¿Pero frutas no era const?
// const significa que no podés REASIGNAR la variable:
//   frutas = ["otra", "lista"];   ❌ TypeError
// Pero SÍ podés cambiar lo que hay ADENTRO del array.
// La caja es la misma; lo que cambia es su contenido.

// Un array puede tener cualquier tipo, incluso mezclados
// (aunque en la práctica casi siempre son del mismo tipo):
const mezcla = [1, "dos", true, null, [5, 6]];
console.log(mezcla[4][0]);           // 5 — array dentro de array


// -----------------------------------------------
// 2. AGREGAR Y SACAR ELEMENTOS
// -----------------------------------------------
// Al FINAL:    push (agrega)   / pop (saca)
// Al PRINCIPIO: unshift (agrega) / shift (saca)

console.log("\n--- Agregar y sacar ---");

const tareas = ["estudiar"];

tareas.push("cocinar");              // agrega al final
tareas.push("entrenar", "leer");     // podés agregar varios
console.log(tareas);                 // ["estudiar", "cocinar", "entrenar", "leer"]

const ultima = tareas.pop();         // saca el último Y LO DEVUELVE
console.log(ultima);                 // "leer"
console.log(tareas);                 // ["estudiar", "cocinar", "entrenar"]

tareas.unshift("despertarse");       // agrega al principio
const primera = tareas.shift();      // saca el primero y lo devuelve
console.log(primera);                // "despertarse"
console.log(tareas);                 // ["estudiar", "cocinar", "entrenar"]

// Truco para acordarte: push/pop son los "cortos" y trabajan
// en el final, que es donde se agrega casi siempre.


// -----------------------------------------------
// 3. BUSCAR EN UN ARRAY
// -----------------------------------------------

console.log("\n--- Buscar ---");

const colores = ["rojo", "verde", "azul", "verde"];

// includes → ¿está o no está? Devuelve un booleano.
console.log(colores.includes("azul"));      // true
console.log(colores.includes("negro"));     // false

// indexOf → ¿en qué posición está? (la PRIMERA vez que aparece)
console.log(colores.indexOf("verde"));      // 1
console.log(colores.indexOf("negro"));      // -1 → significa "no está"

// Esto es muy útil con if:
if (colores.includes("rojo")) {
  console.log("Hay rojo 🔴");
}

// join → convierte el array en un string, con el separador que elijas:
console.log(colores.join(", "));            // "rojo, verde, azul, verde"
console.log(colores.join(" - "));           // "rojo - verde - azul - verde"


// -----------------------------------------------
// 4. SLICE vs SPLICE — copiar un pedazo vs cortar
// -----------------------------------------------
// Tienen nombres casi iguales y hacen cosas MUY distintas.
// Es una confusión clásica, así que prestá atención.
//
//   slice  → COPIA un pedazo. NO toca el original.
//   splice → SACA (o mete) elementos. SÍ modifica el original.

console.log("\n--- slice vs splice ---");

const letras = ["a", "b", "c", "d", "e"];

// slice(desde, hasta) — el "hasta" NO se incluye:
const pedazo = letras.slice(1, 3);
console.log(pedazo);                 // ["b", "c"]
console.log(letras);                 // ["a", "b", "c", "d", "e"] ← intacto

// splice(desde, cuántos) — saca elementos del original:
const numerosSplice = [10, 20, 30, 40, 50];
const sacados = numerosSplice.splice(1, 2);   // desde el índice 1, saco 2
console.log(sacados);                // [20, 30]
console.log(numerosSplice);          // [10, 40, 50] ← ¡modificado!

// Regla general que vas a ver mucho en React:
// preferí los métodos que NO modifican el original.
// Lo vas a entender del todo en la sección 9.


// -----------------------------------------------
// 5. OBJETOS — crear, leer y modificar
// -----------------------------------------------
// Un objeto agrupa datos relacionados bajo NOMBRES (claves),
// en vez de posiciones. Cada par clave: valor es una PROPIEDAD.

console.log("\n--- Objetos básicos ---");

const persona = {
  nombre: "Matías",
  edad: 30,
  ciudad: "Buenos Aires",
  programador: true,
};

// Leer con PUNTO (la forma normal):
console.log(persona.nombre);         // "Matías"
console.log(persona.edad);           // 30

// Leer con CORCHETES (usando un string):
console.log(persona["ciudad"]);      // "Buenos Aires"

// Una propiedad que no existe → undefined (no error):
console.log(persona.telefono);       // undefined

// Modificar una propiedad:
persona.edad = 31;

// Agregar una propiedad nueva (simplemente le asignás un valor):
persona.email = "matias@ejemplo.com";

// Borrar una propiedad:
delete persona.programador;

console.log(persona);
// { nombre: "Matías", edad: 31, ciudad: "Buenos Aires", email: "..." }

// Igual que con los arrays: const no impide cambiar el CONTENIDO.


// -----------------------------------------------
// 6. ¿PUNTO O CORCHETES?
// -----------------------------------------------
// Usá PUNTO siempre que puedas.
// Usá CORCHETES cuando el nombre de la propiedad
// está guardado en una VARIABLE.

console.log("\n--- Punto vs corchetes ---");

const auto = { marca: "Ford", modelo: "Fiesta", anio: 2018 };

const campo = "modelo";
console.log(auto[campo]);            // "Fiesta" ✅ usa el VALOR de la variable
console.log(auto.campo);             // undefined ❌ busca una propiedad llamada "campo"

// Esto se usa muchísimo para recorrer o para formularios:
// "actualizá el campo que el usuario haya tocado".
function actualizar(objeto, clave, valor) {
  objeto[clave] = valor;
}
actualizar(auto, "anio", 2020);
console.log(auto.anio);              // 2020


// -----------------------------------------------
// 7. MÉTODOS — funciones dentro de un objeto
// -----------------------------------------------
// Como vimos ayer, las funciones son valores.
// Entonces una propiedad también puede ser una función.
// A eso se le llama MÉTODO.
//
// De hecho, ya usaste un montón: frutas.push(),
// texto.toUpperCase(), console.log()... ¡console es un objeto
// y log es su método!

console.log("\n--- Métodos ---");

const calculadora = {
  marca: "Casio",
  sumar(a, b) {                      // forma corta de escribir un método
    return a + b;
  },
  restar: (a, b) => a - b,           // también podés usar una arrow function
};

console.log(calculadora.sumar(2, 3));    // 5
console.log(calculadora.restar(10, 4));  // 6


// -----------------------------------------------
// 8. RECORRER OBJETOS — keys, values, entries
// -----------------------------------------------
// Un objeto no tiene índices, así que no lo podés recorrer
// con un for clásico. Pero podés convertirlo en arrays:

console.log("\n--- Recorrer objetos ---");

const stock = { manzanas: 10, peras: 0, uvas: 25 };

console.log(Object.keys(stock));     // ["manzanas", "peras", "uvas"]
console.log(Object.values(stock));   // [10, 0, 25]
console.log(Object.entries(stock));  // [["manzanas", 10], ["peras", 0], ["uvas", 25]]

// Y esos arrays ya los sabés recorrer con for...of:
for (const fruta of Object.keys(stock)) {
  console.log(`${fruta}: ${stock[fruta]} unidades`);   // ← corchetes, porque es una variable
}

// Cuántas propiedades tiene un objeto:
console.log(Object.keys(stock).length);   // 3


// -----------------------------------------------
// 9. ARRAYS DE OBJETOS — el formato de la vida real
// -----------------------------------------------
// Esto es lo que te va a devolver cualquier API y lo que
// vas a mostrar en pantalla con React.

console.log("\n--- Arrays de objetos ---");

const usuarios = [
  { id: 1, nombre: "Ana", edad: 28, activo: true },
  { id: 2, nombre: "Beto", edad: 17, activo: false },
  { id: 3, nombre: "Carla", edad: 35, activo: true },
];

console.log(usuarios[1].nombre);     // "Beto" — posición 1, propiedad nombre

for (const usuario of usuarios) {
  const estado = usuario.activo ? "✅" : "❌";
  console.log(`${estado} ${usuario.nombre} (${usuario.edad})`);
}

// Objetos que adentro tienen otros objetos o arrays (anidados):
const pedido = {
  id: 501,
  cliente: { nombre: "Ana", direccion: { calle: "Corrientes", numero: 1234 } },
  items: ["Teclado", "Mouse"],
};

console.log(pedido.cliente.direccion.calle);   // "Corrientes" — vas encadenando puntos
console.log(pedido.items[0]);                  // "Teclado"
console.log(pedido.items.length);              // 2


// -----------------------------------------------
// 10. ⚠️ REFERENCIAS — la trampa más importante del día
// -----------------------------------------------
// Con los primitivos (números, strings, booleanos), copiar
// una variable crea una copia INDEPENDIENTE:

console.log("\n--- Referencias ---");

let a = 10;
let b = a;          // b es una COPIA del valor
b = 99;
console.log(a, b);  // 10 99 — a no se enteró

// Con arrays y objetos NO pasa eso. La variable no guarda el
// objeto: guarda una REFERENCIA (una "dirección") a él.
// Copiar la variable copia la dirección, no el objeto.

const original = { nombre: "Ana" };
const otraVariable = original;      // ⚠️ NO es una copia: apunta al MISMO objeto
otraVariable.nombre = "Beto";
console.log(original.nombre);       // "Beto" 😱 — se modificó el original

// Es como darle a alguien la dirección de tu casa:
// si pinta la puerta, la que cambia es TU puerta.

// Lo mismo pasa cuando pasás un objeto a una función.
// La función recibe la referencia y puede modificar el original
// (fijate la función `actualizar` de la sección 6: cambió `auto`).

// ¿Y si quiero una copia de verdad? Por ahora, con slice()
// para arrays y Object.assign para objetos:
const listaOriginal = [1, 2, 3];
const listaCopia = listaOriginal.slice();   // slice sin argumentos = copia entera
listaCopia.push(4);
console.log(listaOriginal, listaCopia);     // [1, 2, 3] [1, 2, 3, 4] ✅

const objOriginal = { x: 1 };
const objCopia = Object.assign({}, objOriginal);
objCopia.x = 2;
console.log(objOriginal.x, objCopia.x);     // 1 2 ✅

// En unos días vas a ver el SPREAD (...), que es la forma moderna
// de copiar: [...lista] y { ...objeto }. React lo usa TODO el tiempo,
// justamente porque React necesita que NO modifiques el original.

// Otra consecuencia: comparar con === compara REFERENCIAS, no contenido.
console.log([1, 2] === [1, 2]);             // false — son dos arrays distintos
console.log(original === otraVariable);     // true — es el mismo objeto


// ===============================================
// 🏋️ EJERCICIOS — Completá el código
// ===============================================
// ⚠️ Acordate de lo que pasó el Día 4: no repitas nombres
// de variables que ya existen más arriba en el archivo.

// EJERCICIO 1: Lista de compras
// Instrucción: A partir del array de abajo:
//   a) Agregá "pan" al final y "café" al principio.
//   b) Sacá el último elemento y guardalo en una variable `quitado`.
//   c) Mostrá si la lista incluye "leche" (true/false).
//   d) Mostrá la lista como un string separado por comas.
// Esperado al final: "café, leche, huevos, yerba"  y  quitado = "pan"

const compras = ["leche", "huevos", "yerba"];

// Escribí tu código acá abajo:



// EJERCICIO 2: Tu perfil como objeto
// Instrucción: Creá un objeto `perfil` con: nombre, edad,
// lenguajes (un ARRAY con los lenguajes que sabés) y disponible (booleano).
// Después:
//   a) Agregale una propiedad `github` con tu usuario.
//   b) Agregá "TypeScript" al array de lenguajes (con push, sobre perfil.lenguajes).
//   c) Mostrá: "Matías sabe 3 lenguajes: HTML, CSS, JavaScript, ..."
//      (el número y la lista salen de .length y .join, no los escribas a mano)

// Escribí tu código acá abajo:



// EJERCICIO 3: Función buscadora
// Instrucción: Escribí `buscarPorId(lista, id)` que recorra el array
// y DEVUELVA el objeto con ese id. Si no lo encuentra, que devuelva null.
// Tip: early return (Día 4) adentro del bucle.
// Probala con el array `usuarios` de la sección 9:
//   buscarPorId(usuarios, 3)  →  { id: 3, nombre: "Carla", ... }
//   buscarPorId(usuarios, 99) →  null

// Escribí tu código acá abajo:



// EJERCICIO 4: Contar con un objeto
// Instrucción: Escribí `contarVotos(votos)` que reciba un array de
// strings y DEVUELVA un objeto con cuántas veces aparece cada uno.
// Tip: empezá con un objeto vacío {} y usá corchetes con la variable:
//   si la clave ya existe, sumale 1; si no, ponela en 1.
// Probala con el array de abajo.
// Esperado: { react: 3, vue: 2, angular: 1 }

const votos = ["react", "vue", "react", "angular", "vue", "react"];

// Escribí tu código acá abajo:



// EJERCICIO 5: Inventario
// Instrucción: Usando el objeto `inventario`, escribí una función
// `valorTotal(inv)` que DEVUELVA la suma de (precio × cantidad)
// de todos los productos.
// Tip: Object.values() te da un array de objetos que podés recorrer.
// Esperado: 45000×2 + 22000×5 + 180000×1 = 380000

const inventario = {
  teclado: { precio: 45000, cantidad: 2 },
  mouse: { precio: 22000, cantidad: 5 },
  monitor: { precio: 180000, cantidad: 1 },
};

// Escribí tu código acá abajo:



// EJERCICIO 6: Predecí la salida (referencias)
// Instrucción: ANTES de ejecutar, escribí en un comentario qué creés
// que imprime cada línea. Después descomentá y verificá.

const equipoA = ["Ana", "Beto"];
const equipoB = equipoA;
const equipoC = equipoA.slice();

equipoB.push("Carla");
equipoC.push("Dani");

// Tu predicción acá:
// console.log(equipoA)            →
// console.log(equipoB)            →
// console.log(equipoC)            →
// console.log(equipoA === equipoB) →
// console.log(equipoA === equipoC) →

// Descomentá para verificar:
// console.log(equipoA);
// console.log(equipoB);
// console.log(equipoC);
// console.log(equipoA === equipoB);
// console.log(equipoA === equipoC);


// EJERCICIO 7 (bonus): Filtrar sin modificar
// Instrucción: Escribí `soloActivos(lista)` que DEVUELVA un array NUEVO
// con los usuarios que tienen activo: true. El array original NO
// tiene que cambiar.
// Después mostrá los nombres de los activos y verificá que `usuarios`
// sigue teniendo 3 elementos.
// Esperado: Ana y Carla — y usuarios.length sigue siendo 3.
//
// (Spoiler: acabás de reescribir .filter(), que vemos mañana junto a .map())

// Escribí tu código acá abajo:



// ===============================================
// Cuando termines, ejecutá: node dia-05-arrays-y-objetos.js
// Después pedile a Claude Code que revise tus respuestas 💬
// ===============================================
