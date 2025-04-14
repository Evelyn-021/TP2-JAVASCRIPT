let personas = [
    { nombre: "Ana", sexo: "f", edad: 22 },
    { nombre: "Carlos", sexo: "m", edad: 30 },
    { nombre: "Luisa", sexo: "f", edad: 28 },
    { nombre: "Juan", sexo: "m", edad: 18 }
  ];
  
  let totalEdad = 0;
  let mujerMayor = null;
  let hombreMenor = null;
  let totalEdadMujeres = 0;
  let cantidadMujeres = 0;
  
  for (let persona of personas) {
    totalEdad += persona.edad;
  
    if (persona.sexo === "f") {
      totalEdadMujeres += persona.edad;
      cantidadMujeres++;
      if (!mujerMayor || persona.edad > mujerMayor.edad) {
        mujerMayor = persona;
      }
    }
  
    if (persona.sexo === "m") {
      if (!hombreMenor || persona.edad < hombreMenor.edad) {
        hombreMenor = persona;
      }
    }
  }
  
  console.log("Promedio de edad general:", totalEdad / personas.length);
  console.log("Mujer con mayor edad:", mujerMayor.nombre);
  console.log("Hombre con menor edad:", hombreMenor.nombre);
  console.log("Promedio edad de mujeres:", totalEdadMujeres / cantidadMujeres);
  