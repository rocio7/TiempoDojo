function alerta(elementoA) {
    var ciudad=elementoA.innerText;
    alert("Cargando ciudad " + ciudad);
}
function aceptar() {
    var cookie= document.querySelector ('.cookie');
    cookie.remove();
}
function cambiaTemperatura(elementoSelect) {
    var fOc=elementoSelect.value;
    console.log(fOc);
    //Verificar a que escala esta refiriendo 

    for (var i=1; i<=8; i++){
        var temperatura = document.querySelector('#temperatura'+ i)
        var temperaturaValue = temperatura.innerText;
        temperaturaValue=parseFloat(temperaturaValue);
        console.log(temperaturaValue);
        var newTemp=0;
        if (fOc==="C"){
            console.log("F->C")
            //F-> C
            newTemp=Math.round((temperaturaValue-32)*5/9);
        }else{
            console.log("C->F")
            //C-> F
            newTemp =Math.round(temperaturaValue * 9/5 +32);
        }
        temperatura.innerText= newTemp;
    }
    
}



