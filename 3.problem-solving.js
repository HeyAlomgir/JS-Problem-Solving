/**
 * Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
Length must be at least 8


1.Must contain at least 1 number


2.Must contain at least 1 uppercase letter


3.Must not contain spaces


Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }


*/ 



function checkPassword(password){
    let length = password.length;
    let hasUpperCase =false;
    let hasNumber = false;
    // console.log(password,length);

    let reasons = [];
    let hasSpace = password.includes(" ")

    
    for( let i=0; i<length; i++){
        let character = password[i];
        console.log(character)
        
        if(character >= "0" && character <= "9"){
            hasNumber = true;
        }
        if(character >= "A" && character <= "Z"){
            hasUpperCase = true;
        }
    }
    console.log( password,hasNumber,hasUpperCase);
    if(!hasNumber){
        reasons.push("Missing number");
    }
    if(!hasUpperCase){
        reasons.push("Missing uppercase");
    }

    if(hasSpace == true){
        reasons.push("Space found!!!!!");
    }

    //  console.log(hasSpace);

    let invalid = reasons.length == 0;
    console.log(invalid);
   
    return{
        valid:invalid,
        reasons,
    }

    
    
}

let Output = checkPassword( "helloWorld");
console.log(Output);













