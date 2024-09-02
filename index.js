let nameValue = document.querySelector(".input-name")
let buttonInput = document.getElementById("buttonInput")

let informacionTotal = []

if(localStorage.getItem("nombreUser") !== null && localStorage.getItem("nombreUser") !== "") {
    window.location.href = "informacion.html";
}else {
    console.log("Put name")
}

buttonInput.addEventListener("click", ()=>{
    informacionTotal[0] = nameValue.value;
    localStorage.setItem("nombreUser", informacionTotal[0])
    console.log(informacionTotal)
    window.location.href = "informacion.html";
})

