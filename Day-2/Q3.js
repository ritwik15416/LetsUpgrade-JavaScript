// Input space
let arr = ['Happy','birthday','to','you']
let key = 'birthday';   // key is the element to be searched in the array
// Main program (Linear search used)
let i=0;
for(;i<arr.length;i++){
    if(arr[i]===key){
    console.log('Element found at position:',i+1);
    break;
  }
}
if(i===arr.length){
    console.log('Element not found!');
}
