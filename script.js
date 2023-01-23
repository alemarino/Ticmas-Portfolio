function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    dia = momentoActual.getDate()
    mes = momentoActual.getMonth()+1;
    anio = momentoActual.getFullYear()

    horaImprimible = hora + " : " + minuto + " : " + segundo
    fechaImprimible = dia + " / " + mes + " / " + anio
    
    document.form_fecha.fecha.value = horaImprimible
    document.form_reloj.reloj.value = fechaImprimible
    
  

    setTimeout("mueveReloj()",1000)
}

function hizoClick() {
    //alert("Sus datos fueron enviados correctamente. En breve recibirá noticias nuestras.");
   
        var nombre = document.getElementById("nombreYApellido").value;
        var correo = document.getElementById("CorreoElectrónico").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;

        if (nombre == "" || correo == "" || telefono == "" || mensaje == "") {
            alert("Debes compeltar todos los datos campos"); 
        } else {
        alert("Sus datos fueron enviados correctamente. En breve recibirá noticias nuestras.");
        }
      

  }