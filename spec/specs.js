describe('pigLatin', function() {
  it("will add the letters ay to the end of any word that begins with a vowel", function() {
    expect(pigLatinWord("at")).to.equal("atay");
  });

  it("will move consonants to the end of a word and add ay if the word begins with a consonant", function() {
    expect(pigLatinWord("cat")).to.equal("atcay");
  });

  it("will move consonants to the end of a word and add ay if the word begins with a consonant", function() {
    expect(pigLatinWord("chat")).to.equal("atchay");
  });

  it("will move consonants to the end of a word and add ay if the word begins with a consonant", function() {
    expect(pigLatinWord("chthonic")).to.equal("onicchthay");
  });

  it("will move consonants to the end of a word and add ay if the word begins with a consonant", function() {
    expect(pigLatinWord("squeal")).to.equal("ealsquay");
  });

  it("will translate two words into Pig Latin", function() {
    expect(pigLatinSentence("chthonic squeal")).to.equal("onicchthay ealsquay");
  });

  it("will translate sentence into Pig Latin", function() {
    expect(pigLatinSentence("I am a student")).to.equal("iay amay aay udentstay");
  });
});
