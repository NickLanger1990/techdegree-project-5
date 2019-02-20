const input = document.getElementById("search"); // Getting the input field
const entries = document.getElementsByClassName("entry"); // Getting all a elements with the class of "entry"

input.addEventListener("keyup", function(){ // Adds keyup eventlistener to the input
    const val = input.value; // Getting the user input over the input field
    for (let i = 0; i < entries.length; i++) { // Looping over all entries
        const caption = entries[i].getAttribute("data-title"); // Getting the data-title value
        if (caption.toLowerCase().indexOf(val.toLowerCase()) != -1) { // 
        entries[i].style.display = "block"; 
    }else entries[i].style.display = "none";
    }
}, false)

