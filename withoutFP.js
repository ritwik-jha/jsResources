// to get the area, circumference, dia of a array of radii.

const radius = [2, 4, 6, 8];


function getArea(radius){
    const output = [];

    for(var i = 0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}

function getCircumference(radius){
    const output = [];

    for(var i = 0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * 2);
    }

    return output;
}

function getDiameter(radius){
    const output = [];

    for(var i = 0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }

    return output;
}

console.log(getArea(radius));
console.log(getCircumference(radius));
console.log(getDiameter(radius));
