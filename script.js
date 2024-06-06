var body_font = document.querySelector(".front-end");
var increase = document.querySelector(".increase-button");
var decrease = document.querySelector(".decrease-button");

function Increase(){
    body_font.classList.add("font-size");
}

function Decrease(){
    body_font.classList.remove("font-size");
}

increase.onclick = Increase;
decrease.onclick = Decrease;