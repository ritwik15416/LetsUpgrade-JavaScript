// Copying value from one input field to another
var f1 = document.getElementById("inp1");
var f2 = document.getElementById("inp2")

btn = document.getElementById("button");
btn.onclick = function(){
	f2.value = f1.value;
};
