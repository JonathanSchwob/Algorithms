const reverseVowels = (letters) => {
  let vowel;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let backLength = letters.length - 1;

  for (let i = 0; i < letters.length; i++) {
    if (vowels.indexOf(letters[i]) !== -1) {
      console.log('found a vowel -->', letters[i]);
      for (var j = backLength; j > 0; j--) {
        if (j <= i) {
          return letters;
        }
        if (vowels.indexOf(letters[j]) !== -1) {
          console.log('found a vowel <--', letters[j]);
          backLength = j - 1;
          vowel = letters[j];
          letters[j] = letters[i];
          letters[i] = vowel;
          break;
        }
      }
    }
  }
  return letters;
};

console.log(reverseVowels(['d', 'a', 'v', 'i', 'd', 'o', 'p', 'e']));