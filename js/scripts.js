var pigLatinSentence = function(sentence) {
  var sentenceDowncase = sentence.toLowerCase();
  var newSentence = sentenceDowncase.split(" ");
  var finalSentence = [];
  newSentence.forEach(function(phrase) {
    var word = pigLatinWord(phrase);
    finalSentence.push(word);
  });
  var answer = finalSentence.join(" ")
  return answer;
};

var pigLatinWord = function(phrase) {
  var phraseSplit = phrase.split("");
  if ((phraseSplit[0] === "a") || (phraseSplit[0] === "e") || (phraseSplit[0] === "i") || (phraseSplit[0] === "o") || (phraseSplit[0] === "u")) {
    phraseSplit.push("ay");
    var newPhrase = phraseSplit.join("");
    return newPhrase;
  } else {

    while((phraseSplit[0] !== "a") && (phraseSplit[0] !== "e") && (phraseSplit[0] !== "i") && (phraseSplit[0] !== "o") && (phraseSplit[0] !== "u"))  {
      if ((phraseSplit[0] === "q") && (phraseSplit[1] === "u")) {
        phraseSplit.shift();
        phraseSplit.shift();
        phraseSplit.push("qu");
      } else {
        var letterToShift = phraseSplit.shift();
        phraseSplit.push(letterToShift);
          }
    }
    phraseSplit.push("ay");
    var newPhrase = phraseSplit.join("");

    return newPhrase;
  }

};

$(document).ready(function() {
  $("form#sentence1").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var result = pigLatinSentence(sentence);

    $(".translation").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
