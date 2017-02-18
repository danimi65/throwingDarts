//jshint esversion: 6

function lowRadius(element, index, array){
  return element === 10;
}

function scoreThrows(arr){
let score = [];
let points;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 5 ){
      points = 10;
      score.push(points);

    }else if(arr[i] >= 5 && arr[i] < 11){
      points = 5;
      score.push(points);

    } else {
      points = 0;
      score.push(points);
    }
 }

let sum = 0;
if(score.every(lowRadius)){
  sum+= 100;
}

for(let j = 0; j < score.length; j++){

  sum += score[j];
  
}
  return sum;
 
}





