/**
 * Problem 5: Remove Duplicates From Array
Function name: removeDuplicates(arr)
Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

Test case 2
Input:
 [1, 1, 1, 1]
Output:
[1]
**/ 

function removeDuplicates(arr){
    let uniqe = [];

    for( let item of arr){
        if(uniqe.includes(item)===false){
            uniqe.push(item);
        }
    }
    return uniqe;

    
}

/**
 * Test case 1**/

 let result = [5,3,5,2,3,9,2,7];
let Output = removeDuplicates(result);
console.log(Output);


/**
 * test case 2**/

let result2 = [1,1,1,1];
let Output2 = removeDuplicates(result2);
console.log(Output2);
 