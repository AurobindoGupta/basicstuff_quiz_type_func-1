console.log("Aurobindo Gupta");
var readlineSync = require('readline-sync');
var quesOne,quesTwo,ansOne,ansTwo,score =0;
quesOne="What is the capital of india? ";
quesTwo= "When did india get its indipendence? ";
ansOne= "delhi";
ansTwo="1947";
function quizz(questionOn,ans)
  { 
    var ansW = readlineSync.question(questionOn);
    ansW=ansW.toLowerCase();
    if(ansW===ans)
     { 
      score = score +1;
      console.log("CURRECT!!")
    
     }
    else
      { 
      score = score -1;
      console.log("WRONG!!!!!!")
      }
   return score;
  }
  var ot = quizz(quesOne,ansOne);
  var ot = quizz(quesTwo,ansTwo);
  console.log("SCORE-- is "+ot);