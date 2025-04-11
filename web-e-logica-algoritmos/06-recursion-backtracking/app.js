
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];


const findGift = (gifts, giftName, index = 0) => {
    
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    if(giftName === gifts[index]){
        return `${giftName} está en la posición ${index}.`
    }

    return findGift(gifts, giftName, index+1);
}


let giftToFind = "Lego";
// giftToFind = "Camión";
// giftToFind = "Pelota";
console.log(findGift(gifts, giftToFind));