function maximum(...args){
  let num = args[0];
  for(var i = 1; i < args.length; i++){
    if(args[i] > num){
      num = args[i];
    }
  }
  return num;
}
