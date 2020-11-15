

function Iniciar(){

var usuario, contraseña;

usuario = document.getElementById("txt_usuario").value;
contraseña = document.getElementById("txt_contra").value;

if(usuario=="" || contraseña==""){
    alert("favor de llenar todos los campos");
}

else if(usuario=="aimeeflores" && contraseña=="aimeeflores"){
    alert("Bienvenido a PicnicMoment");
    window.open("C:\\Users\\aimee\\Documents\\Desarrollo web\\JAVASCRIPT\\Clase 3\\ProyectoPt2.html","_self"); //self es el atributo que impide que se abra una nueva pág
    
}
else{
    alert("Tu usuario y/o contraseña son incorrectos");
}
}

function Borrar(){
    document.getElementById("txt_usuario").value="";
    document.getElementById("txt_contra").value="";
}

function Insta(){
    var pregunta
    pregunta=confirm("¿Deseas ir a nuestra perfil de instagram?");
    if(pregunta){
        window.open("https://www.instagram.com/picnic_moment/");
    }

}

function Face(){
    var pregunta
    pregunta=confirm("¿Deseas ir a nuestra página de facebook?");
    if(pregunta){
        window.open("https://www.facebook.com/Picnic-Moment-104402511363388");
    }

}

function Imprimir(){
    alert("¿Desea imprimir la captura de pantalla?")
    window.print();
}

function OpcionFotos(){

    document.images.imagen.src= document.extras.extra.options[document.extras.extra.selectedIndex].value;

}

function Picnic(){

    if(document.getElementById("bare").checked){
        document.getElementById("fotopicnic").src="img/bare.png";
    }
    else{
        document.getElementById("fotopicnic").src="img/triangle.png";
    }
}

function Formulario(){
    alert("Se abrirá una nueva página");
    window.open("C:\\Users\\aimee\\Documents\\Desarrollo web\\JAVASCRIPT\\Clase 3\\ProyectoPt3.html");
}

function Campos(){

    var caja_txt;

    if(document.getElementById("p1a").checked==false && document.getElementById("p1b").checked==false && document.getElementById("p1c").checked==false){
        alert("No contestó la primera pregunta");
    }

    if(document.getElementById("p2a").checked==false && document.getElementById("p2b").checked==false && document.getElementById("p2c").checked==false){
        alert("No contestó la segunda pregunta");
    }

    if(document.getElementById("p3a").checked==false && document.getElementById("p3b").checked==false){
        alert("No contestó la tercera pregunta");
    }
    if(document.getElementById("p4a").checked==false && document.getElementById("p4b").checked==false){
        alert("No contestó la cuarta pregunta");
    }

    caja_txt= document.getElementById("texto").value;
    if(caja_txt.length<1){
        alert("No llenó la caja de opinión");
       
    }
    if(document.getElementById("texto").value=""){
        alert("no");
    }
      


    pregunta=confirm("¿Desea enviar la información?");

    if(pregunta){
        alert("Gracias por su respuesta");
    }
}

function BorrarCampos(){

    var msj;

    msj=confirm("Se borrarán los campos actualmente contestados");

    if(msj){
        location.reload();
    }
}

function Registrarse(){
    window.open("C:\\Users\\aimee\\Documents\\Desarrollo web\\JAVASCRIPT\\Clase 3\\Registro.html","_self");

}

function Pag_Principal(){

    if(document.getElementById("r1").value=="" || document.getElementById("r2").value=="" || document.getElementById("r3").value=="" || document.getElementById("r4").value==""){
        alert("No contestó todos los campos correspondientes");

    }
    else{
        window.open("C:\\Users\\aimee\\Documents\\Desarrollo web\\JAVASCRIPT\\Clase 3\\ProyectoPt2.html","_self");
    }
}

function Fime(){
    alert("Se desplegará una nueva página");
    window.open("https://www.fime.uanl.mx/");
}
/*function CamposVacios(){
    if(document.getElementsByClassName("p1").unchecked.false){
        alert("no");
    }
}*/
