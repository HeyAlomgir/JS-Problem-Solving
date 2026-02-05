/**
 * Problem 1: Word Frequency Counter
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
1.Ignore case differences


2.Ignore extra spaces

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


