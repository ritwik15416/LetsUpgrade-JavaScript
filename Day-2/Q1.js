// Input space
let c = 'T';
let s = 'This is common-sense';
// Main program
let flag = false;
for(let i=0;i<s.length;i++){ 
  if(c===s[i]){
    flag = true;
    break;
  }
}
if(flag){
    console.log('Found!');
  }else{
    console.log('Not Found!'); 
  }
