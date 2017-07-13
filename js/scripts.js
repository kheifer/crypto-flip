
    function cryptoFlip(userMessage) {
      //declare all variables
      var punctuation = userMessage.replace(/[.,'?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      var noSpace = punctuation.replace(/[" "]/g,"");
      var lower = noSpace.toLowerCase();
      var codeLength= lower.length;
      var sqr= Math.sqrt(codeLength);
      var column =Math.round(sqr);
      var row = "";
      var colCut = [];
      var holder = "";
      var answer = [];
      //find the row size based on
      if (column >= sqr) {
        row = column;
      } else {
        row = column + 1;
      };
      //slice the data into rows
      for (var i = 0; i < row; i++) {
      colCut.push(lower.slice(column*i, column*(i+1)));
    }
     //cut the rows into columns
     for ( var k = 0; k < column; k++) {
       for ( var j = 0; j < row; j++) {
         if (colCut[j][k] === undefined) {
           continue;
         }

         holder += colCut[j][k];
         //push out the data in 5 length pieces(allows for different sized strings)
         if (holder.length === 5) {
            answer.push(holder);
            holder = "";
         }
       }
     }
  answer.push(holder);
  //combine the answer
   return answer.join(' ');
  }

$(document).ready(function () {
  $("#crypto").submit(function(event) {
    event.preventDefault();
    var userMessage = $("#words").val();
    var cryptosquare = cryptoFlip(userMessage);
    $(".output").show();
    $("#results").text(cryptosquare);


  })
});
