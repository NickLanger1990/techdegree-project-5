document.getElementById("search").addEventListener("keyup", myFunction);
var x = "";
function myFunction() {
  x = document.getElementById("search");
  x = x.value.toLowerCase();
  return x

}

console.log(myFunction());



