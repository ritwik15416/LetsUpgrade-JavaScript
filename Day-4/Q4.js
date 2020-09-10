const profile = [{'name':'abc','age':20,'country':'India','hobbies':['badminton','reading books']},
{'name':'def','age':22,'country':'USA','hobbies':['badminton','watching movies']},
{'name':'ghi','age':30,'country':'UK','hobbies':['football','reading books']},
{'name':'lmn','age':40,'country':'India','hobbies':['badminton','reading books']},
{'name':'jkl','age':28,'country':'UK','hobbies':['football','reading books']}]

// Function to print only those objects which have age below 30
const below_30 = (arr) => {
	for(let i=0;i<arr.length;i++){
  if(arr[i].age < 30){
  	console.log(arr[i]);
  }
  }
} 
below_30(profile)

// Function to print only those objects which have country India
const india = (arr) => {
	for(let i=0;i<arr.length;i++){
    if(arr[i].country ==='India'){
  	  console.log(arr[i]);
    }
  }
} 
india(profile)
