// Tenemos un array de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Referencias a elementos del DOM
const listaProductos = document.getElementById("lista-de-productos");//cambio de nombres más desciptivos para hacer mas legible el codigo
const input = document.querySelector('input'); //imput no lleva punto


// Función para mostrar productos filtrados
function displayProductos(productosFiltrados) { //agregar la propiedad de dunción 
  // Limpiar la lista de productos antes de mostrar los filtrados
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }


  // Mostrar productos filtrados
  for (let i = 0; i < productosFiltrados.length; i++) { //cambiamos el parametro productos por productosFiltrados
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaProductos.appendChild(d);
  }
}

// Evento de clic en el botón de filtro ---> el evento fue sacado de la funcion displayProductos al igual que las variables de texto y productosFiltrados que estaban dentro
const botonDeFiltro = document.querySelector("button");
botonDeFiltro.onclick = function() {
  const texto = input.value.toLowerCase(); // Convertir a minúsculas para hacer la comparación insensible a mayúsculas
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

// Función de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.nombre.toLowerCase().includes(texto) ||
    item.tipo.toLowerCase().includes(texto) ||
    item.color.toLowerCase().includes(texto)
  );
};

