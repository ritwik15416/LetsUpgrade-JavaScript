let profile = [{
    'name': 'abc',
    'age': 22,
    'city': 'lucknow',
    'salary': 15000
  },
  {
    'name': 'def',
    'age': 25,
    'city': 'delhi',
    'salary': 25000
  },
  {
    'name': 'ghi',
    'age': 30,
    'city': 'bangalore',
    'salary': 35000
  },
  {
    'name': 'jkl',
    'age': 29,
    'city': 'mumbai',
    'salary': 45000
  }
]

function display(arr) {
  let tdata = "";
  arr.forEach(function(arr,index) {

    let rowdata = `<tr>
    <td>${index+1}</td>
    <td>${arr.name}</td>
    <td>${arr.age}</td>
    <td>${arr.city}</td>
    <td>${arr.salary}</td>
    <button onclick='deleteObj(${index})'>delete</button>
    </tr>`
    tdata += rowdata;

  });
  document.getElementsByClassName('tdata')[0].innerHTML = tdata;
}
display(profile);


function searchn() {
  let val = document.getElementById("searchName").value;
  let newData = profile.filter(function(oneBus) {
    return (oneBus.name.toLowerCase().indexOf(val.toLowerCase()) != -1);
  });
  display(newData);
}

function searchc() {
  let val = document.getElementById("searchCity").value;
  let newData = profile.filter(function(oneBus) {
    return (oneBus.city.toLowerCase().indexOf(val.toLowerCase()) != -1);
  });
  display(newData);
}
function deleteObj(index) {
  profile.splice(index, 1);
  display(profile);
}

