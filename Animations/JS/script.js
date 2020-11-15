var passar = document.getElementById("passar");
var quicar = document.getElementById("quicar");
var girar = document.getElementById("girar");
var mudar = document.getElementById("mudar");

function f_passar(){
    var element = document.getElementById("titulo");
    element.style.animation = "passar 1s linear infinite";

}

function f_quicar(){
    var element = document.getElementById("titulo");
    element.style.animation = "quicar 1s linear infinite alternate";

}

function f_girar(){
    var element = document.getElementById("titulo");
    element.style.animation = "girar 1s linear infinite";

}

function f_mudar(){
    var element = document.getElementById("titulo");
    element.style.animation = "mudardecor 4s linear infinite alternate";

}


passar.addEventListener("click", f_passar);
quicar.addEventListener("click", f_quicar);
girar.addEventListener("click", f_girar);
mudar.addEventListener("click", f_mudar);