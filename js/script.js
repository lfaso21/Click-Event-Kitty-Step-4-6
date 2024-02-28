var button = document.querySelector (".show-cat");
//console.log(button);
var cat = document.querySelector (".cat");
//console.log(cat);
button.addEventListener("click", function(){
   // button.innerText = "It's Working!!"; step 4-6
   // cat.classList.add("show");  step4-6
   if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add ("disappear");
    //console.log("Yes");
}
   else { 
    cat.classList.add("show");
    button.innerText = "Shoo, Cat!";
    button.classList.remove ("disappear");
    //console.log("No");
}
});
//console.log(button);