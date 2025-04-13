// #!/usr/bin/env node

'use strict';

// const { mapValues } = require("lodash");


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

const maleCount = function(array) {
    const males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    return males.length;

};



// const femaleCount = function(array) {
//     const females = _.reduce(array, function(accumulator, customer){
//         if(customer.gender === 'female'){
//             accumulator++;
//             return accumulator;
//         }
//     }, 0)
//     return females;
// };



const oldestCustomer = function(array){
    let oldestCustomer = '';
    let oldestCustomerAge = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].age > oldestCustomerAge){
            oldestCustomer = array[i].name;
            oldestCustomerAge = array[i].age;
        }
    }
    return oldestCustomer;
};

const youngestCustomer = function(array){
    let youngestCustomer = '';
    let youngestCustomerAge = 100;
    for(var i = 0; i < array.length; i++){
        if(array[i].age < youngestCustomerAge){
            youngestCustomer = array[i].name;
            youngestCustomerAge = array[i].age;
        }
    }
    return youngestCustomer;
};

const averageBalance = function(array){
    let allBalancesSum = 0;
    let customerNumber = 0;
    
    for(var i = 0; i < array.length; i++){
        let noDollar = array[i].balance.replace('$', '');
        let noComma = noDollar.replace(',', '')
        allBalancesSum += parseFloat(noComma);
        customerNumber++;
    }
 
    // console.log(allBalancesSum / customerNumber)
    return allBalancesSum / customerNumber;
};

var firstLetterCount = function(array, target){
    let targetCount = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].name[0].toLowerCase() === target.toLowerCase()){
            targetCount++
        }
    }
    return targetCount;
};

// var friendFirstLetterCount = function(array, customer, target){
//     let friendLetterCount = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[])
//     }
// };

var friendFirstLetterCount = function(array, customer, target){
    let output = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].name === customer){
            for(let f = 0; f < array[i].friends.length; f++){
                if(array[i].friends[f].name[0].toLowerCase() === target.toLowerCase()){
                    output++
                }
            }
        }
    }
    return output;
}

var friendsCount = function(array, name){
    let output = [];

    for(let i = 0; i < array.length; i++){
        for(let f = 0; f < array[i].friends.length; f++){
            if(array[i].friends[f].name === name){
                output.push(array[i].name);
            }
        }
    }
    return output;
};

var topThreeTags = function(array){
    
};

// var genderCount = function(array){
//     return _.reduce(array, function(accumulator, current){
//     // accumulator = {} // current = customer

//     // determine if current object's gender already exists in accumulator as a key

//         // if it does, increment it

//     // else it doesn't exist

//         // create the key and give it an initial value
        
//     }, {})
// ;};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
