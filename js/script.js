var button = document.querySelector (".show-cat");
//console.log(button);
var cat = document.querySelector (".cat");
//console.log(cat);
button.addEventListener("click", function(){
    button.innerText = "It's Working!!";
    cat.classList.add("show");
});
//console.log(button);