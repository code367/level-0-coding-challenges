function printCommonCharacters(firstString, secondString){
  let result = [];
  // firstString should hold the longest string, swap if necessary.
  if(firstString.length < secondString.length){
    let tmp = firstString;
    firstString = secondString;
    secondString = tmp;
  }
  for(let i = 0; i < firstString.length; i++){
    let chr = firstString.charAt(i).toLowerCase();
    if(!result.includes(chr) && (secondString.includes(chr) || secondString.includes(chr.toUpperCase()))){
      result.push(chr);
    } 
  }
  console.log("Common letters:",result.join(', '));
}



