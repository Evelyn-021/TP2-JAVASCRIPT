let x = parseInt(prompt("Primer número:"));
let y = parseInt(prompt("Segundo número:"));

if (x < y) {
  for (let i = x + 1; i < y; i++) {
    console.log(i);
  }
} else {
  for (let i = x - 1; i > y; i--) {
    console.log(i);
  }
}
