function empezar_a_jugar(){

    presentacion = document.getElementById("entrar-a-jugar")
    alerta = document.getElementById("alerta-jugar")
    juego = document.getElementById("empieza-el-juego")
    reglas = document.getElementById("alerta-reglas")
    botones = document.getElementById("botones-eleccion-juego")
    resultado = document.getElementById("resultado-juego-alerta")


    alerta.style = "display: block"
    setTimeout(()=>{
        presentacion.style = "display: none"
        juego.style = "display: block"
        resultado.style = "display: none"
    }, 2000)
}

function no_jugar(){
    alertaNOjugar = document.getElementById("alerta-NO-jugar")
    alertaNOjugar.style = "display: block"
    setTimeout(()=>{
        empezar_a_jugar()
    }, 3000)
}

function Resultado(result,tiro,mi_tiro){
    resultado.style = "display: block"
    if(result == 0){
        resultado.textContent = `Ganaste, me tiraste ${tiro} y yo te tiré ${mi_tiro}...`
    }else if(result == 1){
        resultado.textContent = `Ja... Te gané, te tiré ${mi_tiro} y vos me tiraste ${tiro}`
    }else if(result == 2){
        resultado.textContent = `°-° ¿Estaremos conectados? Fue empate, tiraste ${tiro} y yo te tiré ${mi_tiro}`
    }
}

function tirar(tipo){
    opciones = ["piedra", "papel", "tijeras"]
    opcion = opciones[Math.floor(Math.random()*opciones.length)]
    if(tipo == opcion){
        Resultado(2, tipo, opcion)
    }else if(tipo === "piedra" && opcion === "tijeras" || tipo === "papel" && opcion === "piedra" || tipo === "tijeras" && opcion === "papel"){
        Resultado(0, tipo, opcion)
    }else if(opcion === "piedra" && tipo === "tijeras" || opcion === "papel" && tipo === "piedra" || opcion === "tijeras" && tipo === "papel"){
        Resultado(1, tipo, opcion)
    }
}