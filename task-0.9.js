function printVowels(str) {
  const vowels = "aeiou";
  let results = [];
  for (let i = 0; i < str.length; i++) {
    let chr = str.charAt(i).toLowerCase();
    if (vowels.includes(chr) && !results.includes(chr)) {
      if (results.push(chr) == vowels.length) {
        break;
      }
    }
  }
  console.log("Vowels:", results.join(", "));
}

printVowels("Hello World");
