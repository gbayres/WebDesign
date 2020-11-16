var passar = document.getElementById("passar");
var quicar = document.getElementById("quicar");
var girar = document.getElementById("girar");
var mudar = document.getElementById("mudar");

function f_passar(){
    var element = document.getElementById("titulo");
    element.style.animation = "passar 5s linear infinite";

}

function f_quicar(){
    var element = document.getElementById("titulo");
    element.style.animation = "quicar 1s linear infinite alternate";

}

function f_girar(){
    var element = document.getElementById("titulo");
    element.style.animation = "girar 6s linear infinite";

}

function f_mudar(){
    var element = document.getElementById("titulo");
    element.style.animation = "mudardecor 4s linear infinite alternate";

}

function f_contar(e){
    var max = e.target.maxLength;
    var inside_text = e.target.value;
    var $n_caracteres = document.getElementById("n_caracteres");
    $n_caracteres.textContent = max - inside_text.length;

}

function f_termo(e){
    var $termo = document.getElementById("termo");
    var $botao_logar = document.getElementById("botao_logar");
    
    console.log($termo.checked);
    
    if ($termo.checked){
        $botao_logar.disabled = false;
    }

    else {
        $botao_logar.disabled = true;
    }

}

passar.addEventListener("click", f_passar);
quicar.addEventListener("click", f_quicar);
girar.addEventListener("click", f_girar);
mudar.addEventListener("click", f_mudar);

var $n_caracteres = document.getElementById("n_caracteres")
var $texto = document.getElementById("texto");
$n_caracteres.textContent = $texto.getAttribute("maxlength");
$texto.addEventListener("input", f_contar);

var $termo = document.getElementById("termo")

$termo.addEventListener("click", f_termo);