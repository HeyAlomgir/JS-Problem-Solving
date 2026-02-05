/**
 * Problem 1: Word Frequency Counter
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences


Ignore extra spaces


Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

Test case 2
Input:  " Hello hello HELLO "
Output: { hello: 3 }
*/ 



function wordFrequency(sentence){
    // console.log(sentence);
    let words = sentence.split(" ");
    // console.log(words);

    let wordCount = {};
    // console.log(wordCount)
 
   
    for(let word of words){
        // console.log(word);
        let wordLowerCase = word.toLowerCase();

        if(wordCount.hasOwnProperty(wordLowerCase)){
            wordCount[wordLowerCase]++;
        }
        else{
            wordCount[wordLowerCase]=1;
        }
    }
    return wordCount ;

}

let Output = wordFrequency( "I love JS and I love coding and JS is Fun");
console.log(Output);




/**
 * thats my trial*/ 



function wordFrequency (sentence){
    let words = sentence.split(" ");
    let wordCount = {};
    for(let word of words){
        let wordLowerCase = word.toLowerCase();
        if(wordCount.hasOwnProperty(wordLowerCase)){
            wordCount[wordLowerCase]++;
        }
        else{
            wordCount[wordLowerCase]=1;
        }
    }
    return wordCount;
}
let result = wordFrequency("I loiibe vile of my cuen but i thimk of nationl progarmar i vile");
console.log(result);