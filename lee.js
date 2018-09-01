
var resu="";


ocultar("idregistro");
ocultar("idlogeadook");

document.getElementById("parrafo").innerHTML = resu;
function mostrarid(idst){

	document.getElementById(String(idst)).style.display = "flex";
}
//"idlogin"
function ocultar(idst){


	document.getElementById(String(idst)).style.display = "none";
}

function mostrarregistro(){
ocultar("idlogin");
	mostrarid("idregistro");

}

function ocultarregistro(){
ocultar("idregistro");
	mostrarid("idlogin");

}

function mostrarlogin(){
ocultar("idregistro");
	mostrarid("idlogin");
	
}

function ocultarlogin(){
ocultar("idlogin");
	mostrarid("idregistro");

}


// todo firebase
var minombre="";
var micedula="";
var mideparta="";
var miemail="";
var mimovil="";
var milocalidad=0;
var mimunicipio="";
var milugarvoto="";
var mimesa="";
var micodigolocal="";

//.toString();


  var config = {
    apiKey: "AIzaSyDDeEsPxBYxzisg4GDOpmYbHBLvIw6L_IY",
    authDomain: "mejorvargaslleras-4fd2e.firebaseapp.com",
    databaseURL: "https://mejorvargaslleras-4fd2e.firebaseio.com",
    projectId: "mejorvargaslleras-4fd2e",
    storageBucket: "mejorvargaslleras-4fd2e.appspot.com",
    messagingSenderId: "912759721594"
  };
  firebase.initializeApp(config);






function datosregistro(){


minombre=	document.getElementById("idnombre").value;
micedula=	document.getElementById("idcedula").value.toString();
mideparta=	document.getElementById("iddepartamento").value;
miemail=	document.getElementById("idemail").value;
mimovil=	document.getElementById("idmovil").value.toString();
milocalidad=	document.getElementById("idlocalidad").value;
mimunicipio=	document.getElementById("idmunicipio").value;
milugarvoto=	document.getElementById("ididireccion").value;
mimesa=	document.getElementById("idmesa").value.toString();
micodigolocal=	document.getElementById("idcodigo").value.toString();

console.log(minombre+" " + micedula +""+
	mideparta+"  " +miemail+" " +mimovil+"  " +milocalidad +"  "+mimunicipio+"   " +milugarvoto
	+"  "+mimesa+"  "+micodigolocal);

}
var logmicedula="";
var logmimovil="";
function logindatos(){

	logmicedula=	document.getElementById("idlogincedula").value.toString();
	logmimovil=	document.getElementById("idloginmovil").value.toString();
}


function nuevochid(stnodo){//nombre1, cedula1, celular1, direccion1 , email1, departamento1,municipio1){
     
// entienda que no importa si se llama diez veces esata funcion alla en firebase  en el nod que  
// le asigne aparecera unnuenvo nodo hijo un child 

        var person = {nombre:minombre,whatsapp:mimovil,
         cedula:micedula,email:miemail,departamento:mideparta,
         municipio:mimunicipio,direccion:milugarvoto,mesa:mimesa,codigolocal:micodigolocal,localidad:milocalidad}; 
      firebase.database().ref().child(String(stnodo)).push(person);

}







function escribefire(){
//nuevochid("user");
datosregistro()

nuevochid("user");
}



function meestoyloegeando(){



logindatos();
validadcionuser();
console.log("  firelo  "+ todofire);
alert(logmimovil+"   "+logmicedula);
}



function validadcionuser(){
for(var val in todofire){
console.log(todofire[val].whatsapp  + "  "+ todofire[val].cedula);
   if(todofire[val].whatsapp==logmimovil&&todofire[val].cedula==logmicedula){
 alert("encontrado login ");
 ocultar("idregistro");
  ocultar("idlogin");
 document.getElementById(String("idlogeadook")).style.display = "flex";
resu=window.Android.showToast("logeado","1","vndhijo");
 //location.replace("https://noenadies.github.io/yefervegamenu/");
 }
}}





var todofire;

var w = window.innerWidth;
var h = window.innerHeight;



//unavesmensaje("mensajedos");
unavesmensaje("user");



var urllog="";
function unavesmensaje(ref)
{

  firebase.database().ref().child("user").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    todofire=snapshot.val();

console.log(todofire);


 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}








