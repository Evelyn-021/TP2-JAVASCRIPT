let numeros = [1, 2, 3, 4, 5, 6];
let sumaPares = 0;

for (let num of numeros) {
  if (num % 2 === 0) {
    sumaPares += num;
  }
}

console.log("Suma de pares: " + sumaPares);
