const findLongestWord = (text) => {

    const words = text.split(' ');

    let longestWord = ''; 

    for (let index = 0; index < words.length; index++) {
        longestWord = longestWord.length < words[index].length ? words[index] : longestWord;
    }

    return longestWord;
}

const text = "JavaScript es un lenguaje de programación increíble para aprender.";

console.log(findLongestWord(text)); 