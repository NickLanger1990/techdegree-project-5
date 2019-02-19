
// Catching the input of the searchfield //

document.getElementById("search").addEventListener("keyup", myFunction);

function myFunction() {
  
  let x = document.getElementById("search");
  x = x.value.toLowerCase();
  console.log(x);

  // var y = document.getElementsByTagName("a");
  // for (i = 0; i < y.length; i++) {
  //   let dataTitles = y[i].getAttribute("data-title").toLowerCase();
    
  //   if (dataTitles === null) {
  //   console.log("dataTitles");
  // }
      
    
  //   }
    
    
}



// Looping through the data-titles and logging them to the console //

// var y = document.getElementsByTagName("a")[0].getAttribute("data-title");
// console.log(y);
var y = document.getElementsByTagName("a");

for (i = 0; i < y.length; i++) {
  let dataTitles = y[i].getAttribute("data-title").toLowerCase()
  console.log(dataTitles);
}



