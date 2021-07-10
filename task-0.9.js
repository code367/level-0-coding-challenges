function printVowels(str){

  const vowels = "aeiou";

  return str.toLowerCase().split('')
  .reduce((list,e)=>{
    if((vowels.indexOf(e)+1)&&!list.includes(e)){
      list.push(e);
    }
    return list;
  },[])
  .join(', ');

}

