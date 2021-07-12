function calculateTriangleArea(a, b, c){
  let s = 0.5 * (a + b + c); 
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

