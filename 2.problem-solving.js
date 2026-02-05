/**
 * Problem 2: Student Marks Analyzer
 * 
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.
Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }

Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }
*/ 



function analyzeMarks(marksObj){
    // console.log(marksObj);
    let highestMarks = -Infinity;
    let lowestMarks = Infinity;

    let highestSubject = null;
    let lowestSubject = null;
    let total = 0;
    for(let subject in marksObj){
        let marks = marksObj[subject]
        // console.log(subject , "->", marks);
        total = total+marks;

         if(marks>highestMarks){
            highestMarks= marks;
            highestSubject = subject;
        }

        else if (marks<lowestMarks){
            lowestMarks=marks;
            lowestSubject = subject;
        }
    }
    let average = total/Object.values(marksObj).length;
    return{
         total,
         average,
        //  highestMarks,
        //  lowestMarks,
         highestSubject,
         lowestSubject,
    }
}

 let Output = analyzeMarks( { math: 78, english: 65, physics: 88, bangla: 55 });
 console.log(Output);






