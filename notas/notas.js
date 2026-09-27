/* Repaso lección 3
   - Estructura de los bucles */
const x = 10;
for (let i = 0; i < x; i++) {
    /* código a ejecutar */
}

/*
La palabra reservada "for" sirve para definir un bucle.
Entre paréntesis se encuentran los tres términos que mantienen al bucle repitiendo.
NO se llaman "parámetros" (esa palabra la voy a usar para funciones, no mezclar):
        - (let i = 0)  -> INICIALIZACIÓN. Crea la variable que lleva el conteo de las vueltas
                          (itera, ergo i). Corre UNA SOLA VEZ, antes de todo.
                          Ojo: si escribo (let i) sin valor, i vale undefined,
                          undefined < 10 da false y el bucle no corre NINGUNA vez.
        - (i < x)      -> CONDICIÓN. Se chequea antes de cada vuelta. Mientras dé true, se repite.
        - (i++)        -> ACTUALIZACIÓN. Modifica la variable i (incrementando o decrementando).
                          Corre DESPUÉS del cuerpo, no antes.

    Acá va SÍ o SÍ "let" y no "const", porque i se reasigna en cada vuelta.

    Problema: bucles infinitos. Si la condición nunca puede ser false, el bucle se repite
    infinitamente. (Obviamente, no queremos eso).

    Qué dice esto?
    Creá una variable i que valga 0 (esto pasa una sola vez).
    Fijate si i es menor que x.
        Si es menor -> ejecutá el código.
                    -> recién ahí sumale 1 a i.
                    -> volvé a fijarte.
        Si no es menor -> cortá.

    El ORDEN importa: primero el código, después el i++.
    Por eso en la primera vuelta i vale 0 y no 1.

    Y corta cuando i es IGUAL a x, no cuando es mayor.
    Con (i < 10) las vueltas son i = 0,1,2...9 -> 10 vueltas, y corta con i valiendo 10.
    Este detalle es el que causa los errores de "me falta o me sobra una vuelta".
*/

/*
Otra forma de recorrer la información, si no se tiene la necesidad del índice, es la forma for...of
*/
const objetos = ["Cuchara", "Cucharita", "Cucharón"];

for (const objeto of objetos) {
  /* Código a repetir */
  console.log(`Encontré esto: ${objeto}`);
}

/*
    Una forma más moderna de recorrer un bucle.
    - (const objeto) -> Crea una variable donde se va guardando el valor.
      Ese valor corresponde al elemento del array donde está parado el bucle.
    - (of objetos)   -> Lo que estamos recorriendo.

    Por qué acá sí puedo usar const?
    Porque en cada vuelta se crea una constante NUEVA, no se reasigna la misma.
    Distinto del for clásico, donde i es siempre la misma variable que se va modificando.

    Qué dice esto?
    Por cada objeto dentro de la caja objetos, guardalo en la constante objeto
    y ejecutá el código.

    Corre exactamente una vez por elemento: no puede ejecutarse más veces
    que la cantidad de valores que hay adentro.

    Además, for...of no es solo para arrays. Funciona con cualquier iterable:
        for (const letra of "hola")   -> recorre h, o, l, a
    También con Map y con Set.
*/

/*
Bucle While
    Otro tipo de bucle.
    La palabra reservada para este bucle es while.
*/

let saldo = 100;
let dia = 0;

while (saldo > 0) {
  saldo -= 30;
  dia++;
  console.log(`Día ${dia}: me quedan $${saldo}`);
}

/*
Este bucle funciona mientras la condición sea verdadera.
(saldo > 0) -> Esto debe ser verdadero para que el bucle se ejecute.
De ser falso, el bucle no se ejecuta.

Qué dice esto?
Mientras saldo sea mayor que 0, restá 30 al saldo y sumá 1 al día.
Imprimí el día y el saldo restante, y repetí.

Si de entrada la condición da falso, no se imprime nada.

OJO con este ejemplo, lo corrí y termina así:
    Día 1: $70 | Día 2: $40 | Día 3: $10 | Día 4: $-20
Termina en NEGATIVO. Por qué?
Porque la condición se chequea ANTES de cada vuelta, no en el medio.
En la vuelta 4 el saldo era 10 (mayor que 0, así que entró), y una vez que entró
el cuerpo se ejecuta ENTERO aunque se pase de largo.

Si quisiera que nunca quede negativo, la condición tendría que ser (saldo >= 30).
*/

/* Distinto es el caso de do...while
Este es otro tipo de bucle que primero ejecuta al menos una vez, aunque la condición sea falsa.
*/

let intentos = 0;

do {
  intentos++;
  console.log(`Intento ${intentos}`);
} while (intentos < 3);

/*
    Este bucle usa dos palabras reservadas, do y while (de forma similar al if...else).
    do { Código a ejecutar } -> este bloque siempre va a correr.
    while (condición);       -> Si esto es verdadero, repite el bucle.

    ATENCIÓN al punto y coma final del while.
    En do...while es OBLIGATORIO. En el while normal no lleva.

    Qué dice esto?
    Hacé esto: sumale 1 a intentos, imprimí el número de intentos.
    Después, mientras intentos sea menor que 3, repetí el bucle.

    Si la condición fuera que intentos sea menor que 0, de todas formas el valor
    de intentos se cambiaría a 1 (porque el cuerpo ya corrió una vez).
*/

/*
Break y continue
    No son un tipo de bucle, más bien son una estructura de control.
    break    -> Corta el bucle.
    continue -> Salta a la siguiente vuelta.
*/

const usuarios = ["ana", "beto", "carla", "diego"];

for (const usuario of usuarios) {
  console.log(`Revisando a ${usuario}...`);
  if (usuario === "carla") {
    console.log("¡Encontrada! Dejo de buscar.");
    break;
  }
}

/*
En este caso, se usa break para indicar que cuando el usuario sea carla, se corte el bucle.

Qué dice esto?
Revisá cada usuario dentro de la caja de usuarios.
Mostrá el nombre del que estás revisando en ese momento.
Si el usuario es carla, imprimí que la encontraste y cortá el bucle.
(implícitamente está la condición de que si no es carla, que siga buscando)

Imprime: ana, beto, carla -> y corta. A diego ni lo mira.
*/

/* Ahora el mismo array, pero con continue. */

for (const usuario of usuarios) {
  if (usuario === "beto") {
    continue;
  }
  console.log(`Saludando a ${usuario}`);
}

/*
Qué dice esto?
Por cada usuario, si el usuario es beto, salteá el resto del código de ESTA vuelta
y pasá directamente a la siguiente.
Si no, saludalo.

Imprime: ana, carla, diego. Se saltea beto pero NO corta el bucle.
Esa es la diferencia con break: continue saltea una vuelta, break termina todo.
*/

/* Un bucle puede tener adentro otros bucles. */

for (let fila = 1; fila <= 3; fila++) {
  let linea = "";
  for (let columna = 1; columna <= 3; columna++) {
    linea += `[${fila},${columna}] `;
  }
  console.log(linea);
}

/* Qué dice esto?
Creá un bucle con estas condiciones:
    Creá una variable fila que valga 1; siempre que fila sea menor o igual a 3; sumale 1 a fila.
    Ejecutá el siguiente código:
        Creá una variable linea que valga un string vacío.
        Creá un bucle con estas condiciones:
            Creá una variable columna que valga 1; siempre que columna sea menor o igual a 3;
            sumale 1 a columna.
            Ejecutá el siguiente código:
                Por cada vuelta, añadí al string linea el texto [fila,columna]
    Imprimí linea. (Esto está FUERA del bucle interno: corre una vez por cada vuelta
    del bucle de afuera, o sea, una vez por fila).

La clave de este ejercicio es la línea (let linea = "").
Está adentro del bucle externo, así que se resetea en cada fila.
Por eso cada fila arranca vacía. Si la sacaba para afuera de los dos bucles,
me salía todo pegado en un solo chorizo de 9 elementos.

El bucle interno corre COMPLETO por cada vuelta del externo:
3 filas x 3 columnas = 9 vueltas del bucle de adentro.
*/

/*
Sobre las correcciones a los ejercicios.
- Tener más cuidado con los corchetes a la hora de anidar.
- Verificar si un valor ya está guardado dentro de una variable antes de hardcodearlo.
- (variable += x) es lo mismo que (variable = variable + x).
- En el for clásico, SIEMPRE inicializar el contador: (let i = 0), nunca (let i).
- Recordar el orden: condición -> cuerpo -> actualización.
*/
