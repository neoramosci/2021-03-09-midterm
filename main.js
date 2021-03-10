// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(num) {
    if ( num < 16 ){
        return 'You can\'t drive.';   
    } else if ( num >= 16 && num <= 17) {
        return 'You can drive but not vote.';
    } else if ( num >= 18 && num <= 24 ) {
        return 'You can vote but not rent a car.';
    } else {
        return 'You can do pretty much anything.'
    }
}


function oddIndices(array) {
    let output = [];
    for (const number of array) {
        if (array % 2 !== 0)
        output.push(array);
    }
    return output;
    }


function averageStringLength(str) {

}


function numOddValues(array) {
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
         odd.push(numbers[i]);
    }
}
}



function firstPunctuationIndex() {

}



function getPlace() {

}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
