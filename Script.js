/*Add elements to buy*/

const botonesAgregar = document.querySelectorAll(".vote-box");

const listaCarrito = document.querySelector("#Carrito ul");

const totalCarrito = document.querySelector("#Carrito p");

let totalAPagar = 0;

let precioPersonaje = 1000;

for(let indice = 0; indice < botonesAgregar.length; indice++){

    function agregarElemCarrito(){
        const elementoLi = document.createElement("li");
        elementoLi.innerText = `Personaje`;
        totalAPagar += precioPersonaje;

        listaCarrito.appendChild(elementoLi)

        totalCarrito.innerText = `Total a pagar $` + totalAPagar;
    }

    botonesAgregar[indice].addEventListener("click", agregarElemCarrito)
};


/*empty button*/ 

const botonBorrar = document.querySelector("#botonBorrar");

function vaciarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = `Total a pagar`;
    totalAPagar = 0;
};

botonBorrar.addEventListener("click", vaciarCarrito);


/*payment button*/

const botonPagar = document.querySelector("#botonPagar");

function irAPagar(){
    window.location.href = `./payment.html`;
};

botonPagar.addEventListener("click", irAPagar);
