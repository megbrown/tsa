console.log("hey");

let arrowImages = ["img/arrow-left.jpg", "img/arrow-right.jpg"]
let arrowArea = document.getElementById("arrow");

window.addEventListener("click", function(event) {
	let randomNum = Math.floor(Math.random() * arrowImages.length)
	arrowArea.innerHTML = `<img src=${arrowImages[randomNum]}>`;
	setTimeout(function(){
  arrowArea.innerHTML = "";
}, 1000);
})

