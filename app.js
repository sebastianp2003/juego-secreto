let NumeroSecreto = 0;
let intentos = 0 ; 
let ListaDeSorteos =[];
let NumeroMaximo= 10;

function AsignarTextoElemento(elemento, texto){
    
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto; 
}

function VerificarIntento(){

    let NumeroUsuario = parseInt(document.getElementById("ValorUsuario").value);

    if (NumeroSecreto === NumeroUsuario){
      AsignarTextoElemento("p", `Acertaste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
      document.getElementById("reiniciar").removeAttribute("disabled");  
    }else 
        if(NumeroUsuario > NumeroSecreto){
          AsignarTextoElemento("p", "El numero secreto es menor")
    }else 
    if(NumeroUsuario < NumeroSecreto){
      AsignarTextoElemento("p", "El numero secreto es mayor")
}
    else{
      AsignarTextoElemento("p", "Vuelve a intentarlo")
    }
    intentos++;
    Limpiar();
}

function GenerarNumero (){
    

    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    console.log(ListaDeSorteos);
    console.log(NumeroGenerado);

    if (ListaDeSorteos.length == NumeroMaximo){
        AsignarTextoElemento("p", "Ya estan todos los numeros");
    }else 
        if(ListaDeSorteos.includes(NumeroGenerado)){
        return GenerarNumero();
    }else{
        ListaDeSorteos.push(NumeroGenerado);
        return NumeroGenerado;
        
    }
}


function Limpiar (){
    
    document.getElementById("ValorUsuario").value = "";
}

function CondicionesIniciales(){

    AsignarTextoElemento("h1", "Damos comienzo al juego");
    AsignarTextoElemento("p", `Elige un numero (1 a ${NumeroMaximo})`);
    NumeroSecreto = GenerarNumero();
    intentos =1;
}

function ReiniciarJuego(){

    Limpiar();
    CondicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}

CondicionesIniciales();