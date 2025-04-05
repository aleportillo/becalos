const invitados = ["Ana", "Carlos", "Cecilia", "Carlota", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const a = invitados[inicio];
        const b = invitados[siguiente];

        if(a[0] === b[0]){
            return [a, b];
        }
        inicio++;
        siguiente++;
    }

    return null; 
}

function todasLasParejas(arr) {
    let inicio = 0;
    let siguiente = 1;
    let parejas = [];

    while (siguiente < arr.length) {
        const a = invitados[inicio];
        const b = invitados[siguiente];

        if(a[0] === b[0]){
            parejas = [...parejas, a, b];
            inicio = inicio + 2;
            siguiente = siguiente + 2;
        } else {
            inicio++;
            siguiente++;
        }
    }

    return parejas.length > 1 ? parejas : false; 
}



console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]
console.log(todasLasParejas(invitados));