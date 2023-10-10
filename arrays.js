let MiArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("original:", MiArreglo);

// Push agrega elementos al final del arreglo
MiArreglo.push(11, 12);
console.log("push:", MiArreglo);

// Pop elimina el último elemento del arreglo
MiArreglo.pop();
console.log("pop:", MiArreglo);

// Unshift agrega elementos al inicio del arreglo
MiArreglo.unshift(-2, -1, 0);
console.log("unshift:", MiArreglo);

// Shift elimina el primer elemento del arreglo
MiArreglo.shift();
console.log("shift:", MiArreglo);

// Slice obtiene una parte del arreglo
let slicedArreglo = MiArreglo.slice(2, 7);
console.log("slice:", slicedArreglo);

// Splice reemplaza elementos en el arreglo
MiArreglo.splice(2, 2, "a", "b", "c");
console.log("splice:", MiArreglo);

// Concat combina dos arreglos en uno nuevo
let newArray = MiArreglo.concat(slicedArreglo);
console.log("concat:", newArray);

// Reverse invierte el orden de los elementos en el arreglo
MiArreglo.reverse();
console.log("reverse:", MiArreglo);

// Sort ordena los elementos del arreglo
MiArreglo.sort();
console.log("sort:", MiArreglo);

// Map aplica una función a cada elemento del arreglo
let squaredArreglo = MiArreglo.map((element) => element ** 2);
console.log("map:", squaredArreglo);

// Filter obtiene un nuevo arreglo con elementos que cumplen una condición
let filteredArreglo = MiArreglo.filter((element) => typeof element === "number");
console.log("filter:", filteredArreglo);

// Reduce obtiene un único valor a partir de los elementos del arreglo
let sum = MiArreglo.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("reduce:", sum);
