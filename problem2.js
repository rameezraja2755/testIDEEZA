
const nameArr = ['r', 'a', 'm', 'e','e', 'z', ' ', 'r','a','j','a'];

const renderLetters = function(array, i){
  if(array.length > i){
    console.log(array[i]);
    renderLetters(array, i + 1)
  }
}

renderLetters(nameArr, 0)