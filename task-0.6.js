//we use the "Rest Parameter" to take any number of arguments.

function maximum(...args){
  let num = args[0];
  for(let i=1;i<args.length;i++){
    if(args[i]>num){
      num = args[i];
    }
  }
  return num;
}
