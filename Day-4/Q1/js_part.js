// Changing images on button clicks (DOM Manipulation)

ig = document.getElementById("CSK");
btn1 = document.getElementById("bn1");
btn2 = document.getElementById("bn2");
btn3 = document.getElementById("bn3");
btn1.onclick = function(){
	ig.src = "https://images-na.ssl-images-amazon.com/images/I/71Mwc9Kh5RL._SL1500_.jpg";
};
btn2.onclick = function(){
	ig.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzljl4HUkLU3yqoZ_1nmYe7OahqmDgIt-cgQ&usqp=CAU";
};
btn3.onclick = function(){
	ig.src = "https://1.bp.blogspot.com/-WpzPK4O-qmE/XekFs-yeeXI/AAAAAAAAPp0/UqYrYIDkjKYoZ5yUOe2sSOgQQR60CMRCgCEwYBhgL/w1200-h630-p-k-no-nu/csk-logo.png";
};
