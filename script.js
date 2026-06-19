
// MODO ESCURO

function toggleDark(){


    document.body.classList.toggle("dark");


}



// TECNOLOGIA

function infoTech(){


let texto = document.getElementById("tech");


texto.innerHTML =

"🚜 Agricultura 4.0 utiliza inteligência artificial, drones, sensores e dados para aumentar a produção e proteger o meio ambiente.";


}




// FORMULÁRIO


function enviar(event){


event.preventDefault();



document.getElementById("msg").innerHTML =

"✅ Mensagem enviada! Obrigado pelo contato.";



}





// ANIMAÇÃO AO ROLAR


const elementos = document.querySelectorAll(".section");



window.addEventListener("scroll",()=>{


elementos.forEach(sec=>{


let posicao = sec.getBoundingClientRect().top;


if(posicao < window.innerHeight - 100){


sec.classList.add("fade");


}



});



});





// CONTADOR DE PRODUÇÃO


let numero = 0;


function contador(){


let contador = document.getElementById("numero");


let intervalo = setInterval(()=>{


numero += 1;


contador.innerHTML = numero + "%";



if(numero >= 95){


clearInterval(intervalo);


}



},30);



}



contador();
