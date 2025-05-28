const planetas = require('./planetas');
const cowsay = require("cowsay");

console.log(cowsay.say({
  text: "¡Vamos a descubrir planetas!",
  e: "^^",
  T: "U "
}));

planetas.forEach(planeta => {
    console.log('---');
    console.log(cowsay.say({
        text: `¡${planeta.nombre}!`,
        f: "tux",
        e: "^^",
        T: "U "
    }));
//   console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`Tipo: ${planeta.tipo}`);
  console.log(`Tamaño: ${planeta.tamaño}`);
  console.log(`Temperatura Promedio: ${planeta.temperaturaPromedio}`);
  console.log(`Distancia a la Tierra: ${planeta.distanciaTierra}`);
});

