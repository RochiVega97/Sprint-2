

localStorage.setItem("gastos",JSON.stringify([]));
const AgregarGasto=()=>{
    let tipo=document.querySelector("#Nombre").value;
    let cantidad=parseInt(document.querySelector("#CantidadGasto").value);
    let NuevoGasto={
        tipo,
        cantidad
    };

    let gastos=JSON.parse(localStorage.getItem("gastos"));
    
    gastos.push(NuevoGasto);
    localStorage.setItem("gastos",JSON.stringify(gastos));
    document.querySelector("#formgastos").reset();
    RefrescarLis();
}
const RefrescarLis=()=>{
    let gastos=JSON.parse(localStorage.getItem("gastos"));
    let listadoHTML=``;
    var total=0;
    var contador=0;
    var gastoind=0;
    gastos.map(gasto=>{
        listadoHTML+=`<li class="gasto">
                        <p>${gasto.tipo}
                        <span class="gasto">$ ${gasto.cantidad}</span>
                    </li>`;
        total+=parseInt(gasto.cantidad);
        contador+=1;
    });
    let divnombres=document.querySelector("#divNombres");
    divnombres.innerHTML=``;
    divnombres.innerHTML=`<div class="gastosrealidos">
                            ${listadoHTML}
                        </div>`;

    gastoind=total/contador;
    console.log(+total);
    console.log(+gastoind);
    
    let divtotal=document.querySelector("#divTotal");
    divtotal.innerHTML=``;
    divtotal.innerHTML=`<div class="gastostotales">
                             ${total}
                            </div>`;
    
    let divCU=document.querySelector("#divCadaUno");
    divCU.innerHTML=``;
    divCU.innerHTML=`<div class="gastosind">
                             ${gastoind}
                            </div>`;

}