let palabra = prompt("Ingresar una palabra:");
let contador = {};

for (let letra of palabra) {
  if (contador[letra]) {
    contador[letra]++;
  } else {
    contador[letra] = 1;
  }
}

console.log(contador);
