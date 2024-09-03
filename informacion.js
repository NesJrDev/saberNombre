const carpetas = document.getElementById("carpetas")
const barPercentaje = document.querySelector(".barPercentaje")
const textPercentaje = document.getElementById("textPercentaje")
const name = document.getElementById("name")
const ipUser = document.getElementById("ipUser")
const hora = document.getElementById("hora")
const dia = document.getElementById("dia")
let ejemplosDeCarpetas = ["C:\|","C:\Intel", "C:\Intel\Logs", "C:\Program Files", "C:\Program Files\BlazingPack Launcher", "C:\Program Files\Common Files", "C:\Program Files\Common Files\Adobe",
    "C:\Program Files\Common Files\Adobe\ADCRefs", "C:\Program Files\Common Files\Adobe\ADCRefs\ACC.adcref", "C:\Program Files\Common Files\microsoft shared", "C:\Program Files\Common Files\microsoft shared\ink",
    "C:\Program Files\Common Files\microsoft shared\ink\ar-SA", "C:\Program Files\Common Files\microsoft shared\ink\bg-BG", "C:\Program Files\Common Files\microsoft shared\ink\cs-CZ",
    "C:\Program Files\Common Files\microsoft shared\ink\da-DK", "C:\Program Files\Common Files\microsoft shared\MSInfo", "C:\Program Files\Common Files\microsoft shared\MSInfo\en-US",
    "C:\Program Files\Common Files\microsoft shared\MSInfo\en-US", "Videos", "3D Objects", "C:\Program Files (x86)\Microsoft", "C:\Program Files (x86)\Microsoft\Edge", "C:\Program Files (x86)\Microsoft\Edge\Application",
    "C:\Program Files (x86)\Microsoft\Edge\Application\elements", "C:\Program Files (x86)\Microsoft\Edge\Application\le\edge_feedback", "C:\Users", "C:\Users\Public", "C:\Users\Public\Documents",
    "C:\Users\Public\Documents\AdobeGCInfo", "C:\Users\Public\Documents\Steam", "C:\Users\Public\Downloads", "C:\Users\Public\Music", "C:\Users\Public\Pictures", "C:\Program Files\PCHealthCheck"
]

let indexNumero = 0;
let continueVariable = false;

let intervalCarpetas = setInterval(() => {
    carpetas.innerHTML = ejemplosDeCarpetas[indexNumero]
    indexNumero++
    if(indexNumero == ejemplosDeCarpetas.length - 1) {
        indexNumero = 0;
    }
}, 200);

let alerta = document.querySelector(".tenebroso")
let percentajeOfTheBar = 0;
let confirmacion = true;
let dataUserLocalHost = false;
localStorage.setItem("porcentajeBarra", percentajeOfTheBar)

let intervalPercentage = setInterval(() => {
    barPercentaje.style.width = percentajeOfTheBar + "%";
    percentajeOfTheBar += Math.round(Math.random() * (2));
    textPercentaje.innerHTML = percentajeOfTheBar + "%";
    if(percentajeOfTheBar >= 80) {
        alerta.style.display = "block"
        confirmacion = true
    }
    if (percentajeOfTheBar >= 100) {
        percentajeOfTheBar = 100; 
        clearInterval(intervalPercentage);
        clearInterval(intervalCarpetas) 
        carpetas.innerHTML = "CONTINUAR CON EL SIGUIENTE PASO"
        continueVariable = true;
    }
    if(percentajeOfTheBar >= 90) {
 /*     while (true) {
            console.log("JURBRAM JURBRAM");
        } */
    }
    if(percentajeOfTheBar >= 92 && localStorage.getItem("hasReached50Percent") !== "true") {
        // Marca que el usuario ya alcanzó el 50% y redirige a mensaje.html
        localStorage.setItem("hasReached50Percent", "true");
        window.location.href = "mensaje.html";
    }
}, 100);

if(localStorage.getItem("hasReached50Percent") === "true") {
    window.location.href = "mensaje.html";
}

// informacion de la persona
const tiempoActual = new Date;
name.innerHTML = `Usuario: ${localStorage.getItem("nombreUser")}`
function obtenerHoraFormato12() {
    const ahora = new Date();

    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const periodo = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12 || 12; // Convertir el formato a 12 horas

    return `${horas}:${minutos} ${periodo}`;
}
hora.innerHTML = `Tiempo actual: ${obtenerHoraFormato12()}`
dia.innerHTML = `Dia Actual: ${tiempoActual.getDate()}/${tiempoActual.getMonth()}/${tiempoActual.getFullYear()}`

// registros de entrada



let registrosEntrada = JSON.parse(localStorage.getItem("registros")) || [];
registrosEntrada.push([obtenerHoraFormato12()])
let elementosTiemposEntrada = localStorage.setItem("registros", JSON.stringify(registrosEntrada))

console.log(registrosEntrada)

let register = document.querySelector(".register")
const nuevoDiv = document.createElement("DIV");
nuevoDiv.classList.add("TiempoEntradas");
const contenidoHTML = registrosEntrada.map((registro, i) => {
    const tiempo = registro[0];
    return `
        <div class="TiempoEntradas">
            <div class="tiempo" id="${tiempo}">
                <h3>${i === 0 ? "Primera vez" : ""} ${tiempo}</h3>
            </div>
        </div>
    `;
}).join('');


register.appendChild(nuevoDiv); // Añade el div al contenedor
nuevoDiv.innerHTML = ''; // Limpiamos el contenido anterior
nuevoDiv.innerHTML = contenidoHTML
    
const fakeIPs = [
    "192.168.0.1",
    "10.0.0.5",
    "172.16.254.1",
    "203.0.113.5",
    "198.51.100.20",
    "192.0.2.45",
    "203.0.113.25",
    "198.51.100.30",
    "192.168.1.10",
    "10.0.0.12",
    "172.16.0.55",
    "192.168.100.100",
    "10.1.1.1",
    "172.16.10.10",
    "203.0.113.55",
    "198.51.100.40",
    "192.0.2.100",
    "10.0.0.99",
    "172.16.50.5",
    "192.168.50.50"
];

if(localStorage.getItem("nombreUser") == "Jurbram" || localStorage.getItem("nombreUser") == "jurbram") {
    ipUser.innerHTML = `Ip del usuario: ${fakeIPs[10]}`;
}else {
    ipUser.innerHTML = `Ip del usuario: ${fakeIPs[Math.round(Math.random() * (19))]}`;
}
