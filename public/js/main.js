/* ----------------------------------------------------------------- */
/* CAMBIA EL TEMA DE OSCURO A CLARO / CLARO A OSCURO. */

function cambiarAClaro(){
  //DEFINIMOS LOS ELEMENTOS

  btn = document.getElementById("cambiar-tema");
  ico = document.getElementById("icono_tema");
  nav = document.getElementById("header-nav")
  jugar = document.getElementById("btn-jugar")
  noJugar = document.getElementById("btn-no-jugar")
  tablaJugué = document.getElementById("tabla-juegos-viejos")
  tablaJuego = document.getElementById("tabla-juegos-nuevos")
  juego = document.getElementById("empieza-el-juego")
  juego_alerta = document.getElementById("alerta-jugar")
  juego_reglas = document.getElementById("alerta-reglas")
  juego_botones = document.getElementById("botones-eleccion-juego")
  juego_resultado = document.getElementById("resultado-juego-alerta")
  alertaNOjugar = document.getElementById("alerta-NO-jugar")
  
//CAMBIAR A TEMA CLARO
//SI EXISTE UN ELEMENTO CON LA ID btn-jugar SIGNIFICA QUE ESTOY EN LA PAGINA DE JUGAR.
if(juego){
    juego_alerta.className = "mt-5 fs-4 alert alert-success"
    if(alertaNOjugar) alertaNOjugar.className = "mt-5 fs-4 alert alert-primary"
    if(juego_resultado) juego_resultado.className = "mt-5 fs-4 alert alert-success"
    if(juego_reglas) juego_reglas.className = "mt-5 fs-4 alert alert-success"
    juego_botones.getElementsByTagName("button")[0].className = "btn btn-outline-dark"
    juego_botones.getElementsByTagName("button")[1].className = "btn btn-outline-dark"
    juego_botones.getElementsByTagName("button")[2].className = "btn btn-outline-dark"
}
if(jugar){
  //LO PONEMOS CON UN COLOR OSCURO
  jugar.className = "btn btn-outline-dark"
  noJugar.className = "btn btn-outline-dark"
}
//SI EXISTE UN ELEMENTO CON EL ID tabla-juegos-viejos SIGNIFICA QUE ESTOY EN LA PAGINA DE JUEGOS
if(tablaJugué){
  //LO PONEMOS DE COLOR GRIS CON UNOS BORDES NEGROS EN CADA SEPARACIÓN DE LA TABLA.
  tablaJuego.className = "mt-2 table table-secondary table-hover table-bordered border-dark"
  tablaJugué.className = "mt-2 table table-secondary table-hover table-bordered border-dark"
}
//LE PONEMOS UN ariaRoleDescription con el nombre cambiar_a_oscuro al botón para indicar que el proximo click es para cambiar a modo oscuro
btn.ariaRoleDescription = "cambiar_a_oscuro";
//CAMBIAMOS EL ICONO DEL BOTÓN
ico.className = "fs-3 far fa-moon ico-tema-oscuro";
//ACTIVAMOS EL MODO CLARO CAMBIANDOLE EL ID AL BODY
document.body.id = "tema-claro"

//GUARDAMOS LOS DATOS DE QUE EL TEMA ES CLARO EN EL LOCALSTORAGE ASÍ SI EL USUARIO RECARGA LA PAGINA QUE SIGA EN ESE TEMA
localStorage.setItem('tema_oscuro', 'false')
}
function cambiarAOscuro(){
  //TODO LO MISMO QUE EN EL MODO CLARO, DA PAJA EXPLCIARLO DE NUEVO, LA UNICA DIFERENCIA ES QUE CAMBIAN LOS COLORES JEJE...
  btn = document.getElementById("cambiar-tema");
  ico = document.getElementById("icono_tema");
  nav = document.getElementById("header-nav")
  jugar = document.getElementById("btn-jugar")
  noJugar = document.getElementById("btn-no-jugar")
  tablaJugué = document.getElementById("tabla-juegos-viejos")
  tablaJuego = document.getElementById("tabla-juegos-nuevos")
  juego = document.getElementById("empieza-el-juego")
  juego_alerta = document.getElementById("alerta-jugar")
  juego_reglas = document.getElementById("alerta-reglas")
  juego_botones = document.getElementById("botones-eleccion-juego")
  juego_resultado = document.getElementById("resultado-juego-alerta")
  alertaNOjugar = document.getElementById("alerta-NO-jugar")

  if(juego){
    juego_alerta.className = "mt-5 fs-4 alert alert-primary"
    if(juego_resultado) juego_resultado.className = "mt-5 fs-4 alert alert-primary"
    if(juego_reglas) juego_reglas.className = "mt-5 fs-4 alert alert-primary"
    if(alertaNOjugar) alertaNOjugar.className = "mt-5 fs-4 alert alert-primary"
    juego_botones.getElementsByTagName("button")[0].className = "btn btn-outline-light"
    juego_botones.getElementsByTagName("button")[1].className = "btn btn-outline-light"
    juego_botones.getElementsByTagName("button")[2].className = "btn btn-outline-light"
  }
  if(jugar){
    jugar.className = "btn btn-outline-primary"
    noJugar.className = "btn btn-outline-primary"
  }
  if(tablaJugué){
    tablaJugué.className = "mt-2 table table-dark table-hover table-bordered border-Secondary"
    tablaJuego.className = "mt-2 table table-dark table-hover table-bordered border-Secondary"
  }

  btn.ariaRoleDescription = "cambiar_a_claro";
  ico.className = "ico-tema-claro fs-3 fas fa-sun";
  document.body.id = "tema-oscuro"
  //GUARDAMOS LOS DATOS DE QUE EL TEMA ES OSCURO EN EL LOCALSTORAGE ASÍ SI EL USUARIO RECARGA LA PAGINA QUE SIGA EN ESE TEMA
  localStorage.setItem('tema_oscuro', 'true')
}

function cambiarTema(){
  if(esTemaOscuro()){
    cambiarAClaro()
  }else{
    cambiarAOscuro()
  }
}

function esTemaOscuro(){
  if(localStorage.getItem("tema_oscuro") === 'true'){
    return true
  }else{
    return false
  }
}

//CUANDO CARGUE LA PAGINA QUE VEA EL ALMACENAMIENTO LOCAL PARA VER EN QUE TEMA LO HABÍA DEJADO PUESTO EL USUARIO.
window.onload = () =>{
  //SI NUNCA CAMBIÓ EL TEMA QUE SE VUELVA OSCURO
  if(!localStorage.getItem("tema_oscuro")){
    cambiarAOscuro()
  }
  if(localStorage.getItem("tema_oscuro") === 'true'){
    //SI EL TEMA LO DEJÓ EN OSCURO QUE SE VUELVA OSCURO
    cambiarAOscuro()
  }else{
    //SI EL TEMA LO DEJÓ EN CLARO QUE SE VUELVA CLARO
    cambiarAClaro()
  }
}
/* ----------------------------------------------------------------- */



/* ----------------------------------------------------------------- */
/* CAMBIA EL TITULO SALUDANDO AL GENERO FEMENINO Y MASCULINO. */

//CREAMOS UNA FUNCIÓN cambiarTitulo QUE LE ENTRA UN VALOR, ESE VALOR LO METEMOS EN UNA VARIABLE LLAMADA title
function cambiarTitulo(title) {
  //ADENTRO DE LA PAGINA BUSCA UN ELEMENTO CON LA ID pagina-titulo, ESO LO GUARDA EN titulo.
  titulo = document.getElementById("pagina-titulo");
  //QUE HAYA UN BUCLE QUE SE REPITA 4 VECES, ESTO LO HACEMOS CON EL FOR
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      //CADA x SEGUNDOS SE LE AGREGA UN . AL TITULO SEGÚN EN QUE NÚMERO DEL BUCLE SE ENCUENTRA
      titulo.textContent = title + ".".repeat(i);
    }, i * 200);
  }
}

//CREAMOS LA FUNCIÓN BIENVENIDA
function bienvenida() {
  //ADENTRO DE LA PAGINA BUSCA UN ELEMENTO CON LA ID pagina-titulo, ESO LO GUARDA EN titulo.
  titulo = document.getElementById("pagina-titulo");
  if (titulo.textContent == "Bienvenido a mi Biografía...") {
    //SI EL TITULO ES Bienvenido a mi Biografía... QUE SE CAMBIE A Bienvenida a mi Biografía 
    cambiarTitulo("Bienvenida a mi Biografía");
  } else {
    //SI EL TITULO NO ES Bienvenido a mi Biografía... QUE SE CAMBIE A Bienvenido a mi Biografía
    cambiarTitulo("Bienvenido a mi Biografía");
  }
}

/* ----------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/* CAMBIA OTROS TITULOS. */

//CREAMOS UNA FUNCIÓN LLAMADA generoGramatical_cambiarTitulo, LO SE... UN NOMBRE DE MIERD, EN ESTA FUNCIÓN LE ENTRAN 3 DATOS QUE SE GUARDAN EN LAS VARIABLES: masculino, femenino Y titulo_id
function generoGramatical_cambiarTitulo(masculino, femenino, titulo_id) {
  //ADENTRO DE LA PAGINA BUSCA UN ELEMENTO CON LA ID QUE TENGA COMO DATO EL titulo_id, ESO LO GUARDA EN titulo.
  titulo = document.getElementById(titulo_id);
  if (titulo.textContent == masculino) {
    //SI EL CONTENIDO DEL titulo ES IGUAL QUE EL VALOR DE masculino QUE SE CAMBIE AL VALOR DE femenino
    titulo.textContent = femenino;
  } else {
    //SI EL CONTENIDO DEL titulo NO ES IGUAL QUE EL VALOR DE masculino QUE SE CAMBIE AL VALOR DE masculino
    titulo.textContent = masculino;
  }
  //TODO ESTO LO HICE PARA CAMBIAR DE bienvenido a bienvenida Y VICEVERSA.
}

/* ----------------------------------------------------------------- */