function promedio(lista) {
    let suma = 0;
    for (let p of lista) suma += p.edad;
    return suma / lista.length;
  }
  
  function mujerConMayorEdad(lista) {
    return lista.filter(p => p.sexo === "f").reduce((max, p) => p.edad > max.edad ? p : max);
  }
  
  function hombreConMenorEdad(lista) {
    return lista.filter(p => p.sexo === "m").reduce((min, p) => p.edad < min.edad ? p : min);
  }
  
  function promedioMujeres(lista) {
    let mujeres = lista.filter(p => p.sexo === "f");
    let suma = mujeres.reduce((acc, p) => acc + p.edad, 0);
    return suma / mujeres.length;
  }
  
  // Usar:
  let personas = [
    { nombre: "Ana", sexo: "f", edad: 22 },
    { nombre: "Carlos", sexo: "m", edad: 30 },
    { nombre: "Luisa", sexo: "f", edad: 28 },
    { nombre: "Juan", sexo: "m", edad: 18 }
  ];
  
  console.log("Promedio general:", promedio(personas));
  console.log("Mujer mayor:", mujerConMayorEdad(personas).nombre);
  console.log("Hombre menor:", hombreConMenorEdad(personas).nombre);
  console.log("Promedio mujeres:", promedioMujeres(personas));
  