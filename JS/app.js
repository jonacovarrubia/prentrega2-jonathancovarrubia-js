// Variables
let menu = [
    { nombre: "Hamburguesa", precio: 6000 },
    { nombre: "Pizza", precio: 9000 },
    { nombre: "Ensalada", precio: 4500 }
];

let pedido = [];
let cliente = {
    nombre: '',
    direccion: '',
    telefono: ''
};

function iniciarSimulacion() {
    alert("Bienvenido al Simulador de Comida");

    // Requerimiento información del cliente
    cliente.nombre = prompt("Ingrese su nombre:");
    cliente.direccion = prompt("Ingrese su dirección:");
    cliente.telefono = prompt("Ingrese su número de teléfono:");

    mostrarMenu();
    agregarAlPedido();
    mostrarPedido();
}

function mostrarMenu() {
    let menuString = "Menú:\n";
    menu.forEach((item, index) => {
        menuString += `${index + 1}. ${item.nombre} - $${item.precio}\n`;
    });
    alert(menuString);
}

function agregarAlPedido() {
    let nombrePlato = prompt("Ingrese el nombre del plato que desea agregar al pedido:");
    let platoEncontrado = buscarPlatoPorNombre(nombrePlato);

    if (platoEncontrado) {
        let cantidad = parseInt(prompt(`Ingrese la cantidad de ${platoEncontrado.nombre} que desea:`));
        if (!isNaN(cantidad) && cantidad > 0) {
            // Añadir el plato con la cantidad al pedido
            platoEncontrado.cantidad = cantidad;
            pedido.push(platoEncontrado);
            alert(`Se agregaron ${cantidad} ${platoEncontrado.nombre}(s) al pedido.`);
        } else {
            alert("La cantidad ingresada no es válida. Vuelva a intentarlo.");
            agregarAlPedido();
        }
    } else {
        alert("Plato no encontrado en el menú. Vuelva a intentarlo.");
        agregarAlPedido();
    }
}

function mostrarPedido() {
    let pedidoString = "Pedido:\n";
    pedido.forEach((item, index) => {
        pedidoString += `${index + 1}. ${item.nombre} - $${item.precio} (Cantidad: ${item.cantidad})\n`;
    });
    alert(pedidoString);
}

function calcularCostoTotal() {
    let costoTotal = pedido.reduce((total, plato) => total + (plato.precio * plato.cantidad), 0);
    alert(`Costo total del pedido: $${costoTotal}`);
}

function buscarPlatoPorNombre(nombre) {
    return menu.find(plato => plato.nombre.toLowerCase() === nombre.toLowerCase());
}
