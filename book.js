let bookimg = document.getElementsByClassName("bookimg")
console.log(bookimg)
for (let i=0; i<bookimg.length; i++) {


bookimg[i].addEventListener('mouseover', function(event){
bookimg[i].width = "250";
})
}
// Dom Manipulation for hovering over the image so it can increase in size
for (let i=0; i<bookimg.length; i++) 
bookimg[i].addEventListener('mouseout', function(event){
bookimg[i].width = "200";
})
let cardb = document.getElementsByClassName("cardb")
console.log(cardb)
for (let i=0; i<cardb.length; i++) {
  cardb[i].addEventListener('mouseover', function(event){
 cardb[i].style.backgroundColor= " lightPink";
  })
  }
for (let i=0; i<cardb.length; i++) {
 cardb[i].addEventListener('mouseout', function(event){
 cardb[i].style.backgroundColor= "white";
 
 })
}
// Dom Manipulation for the coloring and sizing when the mouse is on the image and when its out 