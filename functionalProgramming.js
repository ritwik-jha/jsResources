// to get the area, circumference, dia of a array of radii.

const radius = [2, 4, 6, 8];

const area = function(radius){
    return (Math.PI * radius * radius);
}

const circumference = function(radius){
    return (Math.PI * radius * 2);
}

const diameter = function(radius){
    return (radius * 2);
}

const calculate = function(arr, logic){
    const output = [];

    for(let i = 0; i<arr.length; i++){
        output.push(logic(arr[i]));
    }

    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

