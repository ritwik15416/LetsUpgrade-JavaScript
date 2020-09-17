let bus = [{'name':'abc','src':'delhi','dest':'lucknow','num':10,'pasc':50},
{'name':'def','src':'lucknow','dest':'delhi','num':11,'pasc':55},
{'name':'ghi','src':'goa','dest':'mumbai','num':12,'pasc':60},
{'name':'jkl','src':'mumbai','dest':'goa','num':13,'pasc':65},
{'name':'mno','src':'vellore','dest':'chennai','num':14,'pasc':70}]

function display(arr){
	let tdata = "";
	arr.forEach(function(arr){

    let rowdata = `<tr>
    <td>${arr.name}</td>
    <td>${arr.src}</td>
    <td>${arr.dest}</td>
    <td>${arr.num}</td>
    <td>${arr.pasc}</td>
    </tr>`
    tdata += rowdata;
  });
  document.getElementsByClassName('tdata')[0].innerHTML = tdata;
}
display(bus);

// Add object
function add(e){
	e.preventDefault();
  let newBus = {};
  let name = document.getElementById('name').value;
  let source = document.getElementById('src').value;
  let dest = document.getElementById('dest').value;
  let num = document.getElementById('num').value;
  let cap = document.getElementById('capacity').value;
  newBus.name = name;
  newBus.src= source;
  newBus.dest = dest;
  newBus.num = Number(num);
  newBus.pasc = Number(cap);
  bus.push(newBus);
  display(bus);
  document.getElementById("name").value = "";
  document.getElementById("src").value = "";
  document.getElementById("dest").value = "";
  document.getElementById("num").value = "";
  document.getElementById("capacity").value = "";
}

// Search for sources 
function searchs(){
	let val = document.getElementById('searchSource').value;
  let newData = bus.filter(function(oneBus){
  	return (oneBus.src.toLowerCase().indexOf(val.toLowerCase())!=-1);
  });
  display(newData);
}
// Search for destinations
function searchd(){
	let val = document.getElementById('searchDest').value;
  let newData = bus.filter(function(oneBus){
  	return (oneBus.dest.toLowerCase().indexOf(val.toLowerCase())!=-1);
  });
  display(newData);
}
