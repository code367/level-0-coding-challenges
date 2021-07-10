function printCommonCharacters(str1, str2){
  let commonLetters = str1.split('')
  .filter(e=>(str2.indexOf(e.toLowerCase())+1)||(str2.indexOf(e.toUpperCase())+1))
  .reduce((list,e)=>{if(!list.includes(e)){list.push(e);}return list;},[])
  .join(", ");
  console.log("Common letters:",commonLetters);
}
