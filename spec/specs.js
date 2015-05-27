describe('pigLatin', function() {
  it("will add the letters ay to the end of any word that begins with a vowel", function() {
    expect(pigLatin("at")).to.equal("atay");
  });

  it("will move consonants to the end of a word and add ay if the word begins with a consonant", function() {
    expect(pigLatin("cat")).to.equal("atcay");
  });

  it("will move consonants to the end of a word and add ay if the word begins with a consonant", function() {
    expect(pigLatin("chat")).to.equal("atchay");
  });
});
