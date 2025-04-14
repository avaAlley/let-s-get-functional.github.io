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



const femaleCount = function(array) {
    let count = 0
    const females = _.reduce(array, function(females, customer){
        if(customer.gender === 'female'){
          count++;
          return females;
        }
    }, 0)
    return count;
};



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
    let allTagsArr = [];
    let allTags = [];
    let tagsObj = {};
    let tagPairs = []
    let tagCount = 0
    let topTags = [];
    for(let i = 0; i < array.length; i++){
        allTagsArr.push(array[i].tags)
    }
    
    for(let i = 0; i < allTagsArr.length; i++){
      allTags = allTags.concat(allTagsArr[i]);
    }
  
    tagsObj = _.reduce(allTags, function(accumulator, current){
      if(accumulator[current]){
        accumulator[current]++;
      } else {
        accumulator[current] = 1
      }
      return accumulator;
    }, {})
    
    tagPairs = Object.entries(tagsObj);
  
    for(let i = 0; i < tagPairs.length; i++){
      if(tagPairs[i][1] > tagCount){
        tagCount = tagPairs[i][1];
      }
    }
    // console.log(tagCount)
    topTags = _.reduce(tagPairs, function(accumulator, current){
      if(current[1] === tagCount){
         // concole.log(current[1], current)
         accumulator.push(current[0]);
      }
      return accumulator;
    }, [])
    
    // console.log(topTags);
    return topTags;
};

var genderCount = function(array){
    return _.reduce(array, function(accumulator, current){
      
      if(current.gender === 'female'){
        if(accumulator.female){
          accumulator.female++;
        } else {
          accumulator.female = 1;
        }
      }
      
      if(current.gender === 'male'){
        if(accumulator.male){
          accumulator.male++;
        } else {
          accumulator.male = 1;
        }
      }
      
      if(current.gender === 'non-binary'){
        if(accumulator['non-binary']){
          accumulator['non-binary']++;
        } else {
          accumulator['non-binary'] = 1;
        }
      }

      return accumulator;
        
    }, {})
;};

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
