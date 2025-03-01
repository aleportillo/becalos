const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
    "'", '"', ',', '<', '.', '>', '/', '?', '\\', '|', '`', '~'
];

const charLength = document.querySelector("#charLength");
const lengthRange = document.querySelector("#lengthRange");
const passwordOutput = document.querySelector("#passwordOutput");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const includesLowercase = document.querySelector("#lowercase");
const includesUppercase = document.querySelector("#uppercase");
const strengthIndicator = document.querySelector("#strengthIndicator");

const utils = {
    generateRandomBetween: (min, max) => Math.floor( Math.random() * (max - min + 1) + min ), 
    getCharsFromArray: (array, num) => {
        let chars = "";
        for (let i = 0; i < num; i++) {
            const randNumber = utils.generateRandomBetween(0, array.length-1);
            chars += array[randNumber];
        }
        return chars;
    },
    strengthPassword: () => {
        const passLength = lengthRange.value;
        const minLength = lengthRange.min;
    
        if(passLength >= 12 && minLength >= 3){
            strengthIndicator.value = 100;
        } else if(passLength >= 8 && minLength >= 2){
            strengthIndicator.value = 75;
        } else {
            strengthIndicator.value = 30;
        }
    }
}

// GENERAL LISTENERS
lengthRange.addEventListener("change", function (e) {
    charLength.textContent = e.currentTarget.value;
    utils.strengthPassword();
});

function checkedListener() {

    const min = [includeNumbers, includeSymbols, includesLowercase, includesUppercase]
        .filter(input => input.checked)
        .length; 

    lengthRange.min = min;

    lengthRange.value = lengthRange.value < min ? min : lengthRange.value;
    charLength.textContent = lengthRange.value;
    utils.strengthPassword();

}
includeNumbers.addEventListener('change', checkedListener);
includeSymbols.addEventListener('change', checkedListener);
includesLowercase.addEventListener('change', checkedListener);
includesUppercase.addEventListener('change', checkedListener);

// GENERATE PASSWORD
function generatePassword () {
    
    const passLength = lengthRange.value;
    const minLength = lengthRange.min;
    const includeNumbers = document.querySelector("#numbers").checked;
    const includeSymbols = document.querySelector("#symbols").checked;
    const includesLowercase = document.querySelector("#lowercase").checked;
    const includesUppercase = document.querySelector("#uppercase").checked;

    let tempPassword = "";

    [
        {include: includeNumbers, array: numbers},
        {include: includeSymbols, array: symbols},
        {include: includesUppercase, array: letters, isUpper: true},
        {include: includesLowercase, array: letters},
    ]
        .filter(o => o.include)
        .forEach((o, index, array )=> {

            const maxChars = passLength - minLength - tempPassword.length;

            const totalChars = (index === array.length - 1) ?
                passLength - tempPassword.length : utils.generateRandomBetween(1, Math.max(1, maxChars));
            
            const chars = utils.getCharsFromArray(o.array, totalChars);
            tempPassword += o.isUpper ? chars.toUpperCase() : chars;

        });

    passwordOutput.value = tempPassword.split("").sort( () => Math.random() - 0.5 ).join("")

}
generateButton.addEventListener("click", generatePassword)


// COPY PASSWORD
const copiarPassword = () => {
    if( passwordOutput.value === "" ) return;
    const psCopy = passwordOutput.value;
    navigator.clipboard.writeText(psCopy);
}
copyButton.addEventListener("click", copiarPassword);

