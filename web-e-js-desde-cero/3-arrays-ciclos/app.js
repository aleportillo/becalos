const fruits = [
    { name: "Manzana", color: "Rojo", type: "dulce" },
    { name: "Plátano", color: "Amarillo", type: "tropical" },
    { name: "Fresa", color: "Rojo", type: "ácido" },
    { name: "Mango", color: "Naranja", type: "tropical" },
    { name: "Uva", color: "Morado", type: "dulce" },
    { name: "Limón", color: "Verde", type: "cítrico" },
    { name: "Naranja", color: "Naranja", type: "cítrico" },
    { name: "Piña", color: "Amarillo", type: "tropical" },
    { name: "Cereza", color: "Rojo", type: "dulce" },
    { name: "Maracuyá", color: "Amarillo", type: "ácido" },
    { name: "Papaya", color: "Naranja", type: "tropical" },
    { name: "Kiwi", color: "Verde", type: "ácido" },
    { name: "Sandía", color: "Verde", type: "dulce" },
    { name: "Toronja", color: "Rosa", type: "cítrico" },
    { name: "Coco", color: "Marrón", type: "tropical" }
];

const colorsTotal = {};
const typeTotal = {};

while(fruits.length > 0){
    const fruit = fruits.pop();
    typeTotal[fruit.type] = (typeTotal[fruit.type] ?? 0) + 1;
    colorsTotal[fruit.color] = (colorsTotal[fruit.color] ?? 0) + 1;
}

// for (let index = 0; index < fruits.length; index++) {
//     const fruit = fruits[index];
//     typeTotal[fruit.type] = (typeTotal[fruit.type] ?? 0) + 1;
//     colorsTotal[fruit.color] = (colorsTotal[fruit.color] ?? 0) + 1;
// }

const fruitTypes = ['Dulce', 'Tropical', 'Ácido', 'Cítrico'];
const fruitColors = ['Rojo', 'Amarillo', 'Naranja', 'Morado', 'Verde', 'Rosa', 'Marrón'];

console.log('Total de tipos: ');
for (let index = 0; index < fruitTypes.length; index++) {
    const type = fruitTypes[index];
    console.log(`${type} - `, typeTotal[type.toLowerCase()]);
}

console.log('\nTotal de colores: ');
for (let index = 0; index < fruitColors.length; index++) {
    const color = fruitColors[index];
    console.log(`${color} - `, colorsTotal[color]);
}