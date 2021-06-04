// VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); // Permite obtener el año actual
const min = max - 10;

// OBJETOS
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: '',
};

// EVENTOS
document.addEventListener('DOMContentLoaded', () => { // DOMContentLoaded: DOM cargado
    mostrarAutos(autos); // Mostrar listado de autos

    llenarSelect(); // Llenar select fecha
})

marca.addEventListener('change', e => { // change: evento cuando cambia la opcion del 'select'
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
}) 

year.addEventListener('change', e => { 
    datosBusqueda.year = parseInt(e.target.value); // parseInt: convertir un string a int

    filtrarAuto();
}) 

minimo.addEventListener('change', e => { 
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
}) 

maximo.addEventListener('change', e => { 
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
}) 

puertas.addEventListener('change', e => { 
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
}) 

color.addEventListener('change', e => { 
    datosBusqueda.color = e.target.value;

    filtrarAuto();
}) 

transmision.addEventListener('change', e => { 
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
}) 

//FUNCIONES
function mostrarAutos(autos) {

    limpiarHTML(); // Elimina el HTML previo
    
    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Precio: $${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHTML); // appendChild: Insertar en el HTML
    })
}

function limpiarHTML() {
    
    while (resultado.firstChild) { // firstChild: Primer elemento - 'miestras haya algo'
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect() {

    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        
        year.appendChild(opcion);
    }
}

function filtrarAuto() {
  
    const resultado = autos.filter(filtrarMarca).filter(filterYear).filter(filterMinimo).filter(filterMaximo).filter(filterPuertas).filter(filterColor).filter(filterTransmision); 
    
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado() {

    limpiarHTML();
    
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otras opciones de busqueda';

    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {

    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
}

function filterYear(auto) {

    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }else{
        return auto;
    }
}

function filterMinimo(auto) {

    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }else{
        return auto;
    }
}

function filterMaximo(auto) {

    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }else{
        return auto;
    }
}

function filterPuertas(auto) {

    if(datosBusqueda.puertas){
        return auto.puertas == datosBusqueda.puertas;
    }else{
        return auto;
    }
}

function filterColor(auto) {

    if(datosBusqueda.color){
        return auto.color == datosBusqueda.color;
    }else{
        return auto;
    }
}

function filterTransmision(auto) {

    if(datosBusqueda.transmision){
        return auto.transmision == datosBusqueda.transmision;
    }else{
        return auto;
    }
}




