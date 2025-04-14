function divisibles(minimo, maximo, divisor) {
    let lista = [];
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        lista.push(i);
      }
    }
    return lista;
  }
  
  // Probar
  console.log(divisibles(1, 30, 4)); // Muestra los múltiplos de 4 entre 1 y 30
  