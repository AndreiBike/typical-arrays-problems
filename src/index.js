
exports.min = function min (array) {
 
  if (Array.isArray(array)) {
    if (array.length > 0){
      let minNum = Math.min(...array);
      return minNum;
    }
  }
  return 0;
}



exports.max = function max (array) {
  
  if (Array.isArray(array)) {
    if (array.length > 0) {
      let maxNum = Math.max(...array);
      return maxNum;
    }  
  }
  return 0;
}




exports.avg = function avg (array) {

  if (Array.isArray(array)) {
    if (array.length > 0) {
      
      let result  = 0;

      for (let i=0; i < array.length; i++){
        result += array[i];
      }

      result = result / array.length;

      return result;
    }  
  }

  return 0;
}

