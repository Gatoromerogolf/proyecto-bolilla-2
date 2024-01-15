var variable = 5;
var respuesta = window.prompt("modelo  con window.prompt " + variable);
alert("La respuesta fue :  " + respuesta);

//ventana de confirmación.  se procesa aceptar o cancelar
var confirma = window.confirm("Aca va el  mensaje que queremos pasar");
if (confirma == true)
        {
        alert ("recibimos la aceptación");}
    else
        {
        alert ("anda a cagar 😭😭😭😭");}

// manejo de fechas;
var fecha = new Date;
alert ("fecha de hoy :" + fecha);

var dia = fecha.getDate();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

alert ("Dia: " + dia + " Mes: " + (mes+1) + " Año: " + anio);

var dia = fecha.getDay();
alert ("Dia de la semana con domingo = 0 ....Vamos con Day .... Dia: " + dia + " Mes: " + (mes+1) + " Año: " + anio);

// getFullYear() (ej: 1991)
// getMonth() nro de mes del año:  10 (noviembre)
// getDate() nro de dia del mes:  23
// getDay() dia de la semana (0-6)
// getHours() horas (0-23)
// getMinutes() minutos (0-59)
// getSeconds() segundis (0-59)