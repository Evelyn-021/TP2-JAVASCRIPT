let a = parseInt(prompt("Primer número:"));
let b = parseInt(prompt("Segundo número:"));

let inicio = Math.min(a, b);
let fin = Math.max(a, b);

for (let i = inicio + 1; i < fin; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
