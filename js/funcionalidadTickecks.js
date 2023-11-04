
//totalAPagar();
const botones=document.querySelectorAll(".bo");
const campoPagar=document.querySelector(".pagar");
const cantidadTickets=document.querySelector(".cantTickets");
var selectCompleto=document.querySelector(".select");

const formulario={
    nombre:"",
    apellido:"",
    email:"",
    cantidad:0,

}
//selectItems.forEach(s=>console.log(s));

botones[1].addEventListener("click",function(e){
        //campoPagar.placeholder = "";
        
        console.log(cantidadTickets.value);
        if(!(cantidadTickets.value>0)){
            cantidadTickets.value="";
            mensajeValidador("no ha introducido un numero valido de tickets",true);

        }else{
            mensajeValidador("ha introducido un numero valido de tickets",false);
            campoPagar.value=precioFinal(cantidadTickets.value)+'$';
        }
        console.log(precioFinal(cantidadTickets.value));
        
       
        //campoPagar.value="s";
});

botones[0].addEventListener("click",function(e){
        
        cantidadTickets.value="";
        campoPagar.value="";

});

console.log(selectCompleto.selectedIndex);

function precioFinal(cantidad){
    let precio=0;
    let categoria=selectCompleto.options[selectCompleto.selectedIndex].value;
    console.log(categoria);
    switch (categoria) {
        case 'Estudiante':
            precio=Math.abs((cantidad*200)-((cantidad*200)*0.8));
            break;
        case "Traiine":
            precio=Math.abs((cantidad*200)-((cantidad*200)*0.5));
            break;
        case 'Junior':
            precio=Math.abs((cantidad*200)-((cantidad*200)*0.15));
            break    
        default:
            break;
    }
    return precio;
    
    //console.log(selectCompleto.value[0]);
       
}
function mensajeValidador(mensaje,estado){
    const parrafo=document.createElement('p');
    parrafo.textContent=mensaje;
    const divEstados=document.querySelector('.estados');
    if(estado){
        parrafo.classList.add('ticketIncorrectos');
    }else{
        parrafo.classList.add('ticketCorrectos');
    }
    divEstados.appendChild(parrafo);
    setTimeout(() => {
        parrafo.remove();
    }, 5000);
}





