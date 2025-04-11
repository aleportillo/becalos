const findMax = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);


    const leftMax = findMax(left);
    const rightMax = findMax(right);

    return Math.max(leftMax, rightMax);
}

const numbers = [3, 8, 2, 10, 5, 7];
console.log('MAX', findMax(numbers));