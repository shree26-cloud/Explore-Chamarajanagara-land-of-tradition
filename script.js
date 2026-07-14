function searchPlace() {

let place = document.getElementById("searchBox").value.toLowerCase().trim();

if (place === "bandipur" || place === "bandipur national park") {

window.location.href = "bandipur.html";

}

else if (place === "br hills" || place === "b r hills") {

window.location.href = "brhills.html";

}

else if (place === "himavad gopalaswamy betta") {

window.location.href = "himavad.html";

}

else if (place === "male mahadeshwara hills" || place === "mm hills") {

window.location.href = "mmhills.html";

}
  else if(search.includes("gaganachukki") || search.includes("gagan"))
window.location="gaganachukki.html";
    
    else if(search.includes("suvarnavathi") || search.includes("dam"))
window.location="suvarnavathi.html";

else {

alert("Tourist place not found.");

}

}
let slides = document.querySelectorAll(".slide");

let current = 0;

if(slides.length>0){

setInterval(()=>{

slides[current].classList.remove("active");

current=(current+1)%slides.length;

slides[current].classList.add("active");

},3000);

}
function addReview(){

let name=document.getElementById("name").value;

let rating=document.getElementById("rating").value;

let review=document.getElementById("review").value;

if(name=="" || review==""){

alert("Please fill all fields.");

return;

}

let html=`

<div class="review">

<h3>${name}</h3>

<p>${rating}</p>

<p>${review}</p>

</div>

`;

document.getElementById("reviewList").innerHTML+=html;

document.getElementById("name").value="";

document.getElementById("review").value="";

}
