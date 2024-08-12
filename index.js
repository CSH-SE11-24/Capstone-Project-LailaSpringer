let button = document.querySelector(".alert")
let button2 = document.querySelector("button2")
// hoverover alert for text to change
button.addEventListener('mouseover', function(event){
button.textContent = "BOOK NOW"
})
// move the mouse for the text to change back
button.addEventListener('mouseout', function(event){
button.textContent = "Best 17 year nail tech there is 🩷!"
})
// Dom Manipulation of the alert 