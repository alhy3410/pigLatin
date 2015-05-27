var pigLatin = function(phrase) {
  var phraseSplit = phrase.split("");
  if ((phraseSplit[0] === "a") || (phraseSplit[0] === "e") || (phraseSplit[0] === "i") || (phraseSplit[0] === "o") || (phraseSplit[0] === "u")) {
    phraseSplit.push("ay");
    var newPhrase = phraseSplit.join("");
    return newPhrase;
  } else {

    while((phraseSplit[0] !== "a") && (phraseSplit[0] !== "e") && (phraseSplit[0] !== "i") && (phraseSplit[0] !== "o") && (phraseSplit[0] !== "u"))  {
      if ((phraseSplit[0] === "q") && (phraseSplit[1] === "u")) {
        phraseSplit.shift()
        phraseSplit.shift()
        phraseSplit.push("qu")
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
