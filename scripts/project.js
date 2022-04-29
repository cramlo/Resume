// JavaScript source code


function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

function myForm() {
  var x = document.getElementById("myForm");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
   else {
    x.style.display = "block";
  }
}
