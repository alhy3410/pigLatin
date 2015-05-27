var pigLatin = function(phrase) {
  var phraseSplit = phrase.split("");
  if ((phraseSplit[0] === "a") || (phraseSplit[0] === "e") || (phraseSplit[0] === "i") || (phraseSplit[0] === "o") || (phraseSplit[0] === "u")) {
    phraseSplit.push("ay");
    var newPhrase = phraseSplit.join("");

  return newPhrase;
  }

  else {
    var phraseSlice = phraseSplit.slice(1);
    var letter1 = phraseSplit.shift();
    phraseSlice.push(letter1, "ay");
    var newPhrase = phraseSlice.join("");

  return newPhrase;
  }


    // letterPosition = 1
    // if ((phraseSplit[letterPosition] !== "a") || (phraseSplit[0] !== "e") || (phraseSplit[0] !== "i") || (phraseSplit[0] !== "o") || (phraseSplit[0] !== "u")) {



};
