let nameValue = document.querySelector(".input-name")
let buttonInput = document.getElementById("buttonInput")

let informacionTotal = []

if(localStorage.getItem("nombreUser") !== null && localStorage.getItem("nombreUser") !== "") {
    window.location.href = "informacion.html";
}else {
    console.log("Put name")
}

buttonInput.addEventListener("click", ()=>{
    if(nameValue.value == "EduardoGay._1213++paginaNombre") {
    nameValue.value = "Eduardo"
    informacionTotal[0] = "Eduardo";
    localStorage.setItem("nombreUser", informacionTotal[0])
    console.log(informacionTotal)
    alert("Error ${LocalStorage||Informacion}; Nombre{error} catch{}try{}")
    }else {
        informacionTotal[0] = nameValue.value;
        localStorage.setItem("nombreUser", informacionTotal[0])
        console.log(informacionTotal)
        window.location.href = "informacion.html";
        alert(`Tu nombre eesss ${localStorage.getItem("nombreUser")} verdad???`)
    }

})

