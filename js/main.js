//---------variables------------------
const precio1=120000;
const precio2=45000;
const precio3=60000;
const precio4=100000;
const precioFinal=precio1+precio2+precio3+precio4;
//------------Precios(id)-----------------
const primer=document.querySelector('#primerprecio');
const segundo=document.querySelector('#segundoprecio');
const tercer=document.querySelector('#tercerprecio');
const cuarto=document.querySelector('#cuartoprecio');

//-----------------html(id)------------------------------------
const modal=document.querySelector('#modal');
const carrito=document.querySelector('#imagen-carrito');
const cerrar=document.querySelector('#cerrar');
const compra=document.querySelector('#boton');
//-----precios------------------------------
primer.textContent=`COP ${precio1}`;
segundo.textContent=`COP ${precio2}`;
tercer.textContent=`COP ${precio3}`;
cuarto.textContent=`COP ${precio4}`;
//----------modal----------------------------------
//abrir modal-----------------------
 carrito.addEventListener('mouseover',()=>{
  modal.classList.add('rpmodal2');
 })
 //cerrarmodal--------------------------
 cerrar.addEventListener('click',()=>{
    modal.classList.remove('rpmodal2');
 })

compra.addEventListener('click',()=>{
    const suma=document.createElement('div');
    suma.classList.add('sumaProduct');
    suma.textContent=precioFinal;
    modal.appendChild(suma);
})


