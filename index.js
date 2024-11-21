window.addEventListener('scroll', function() {
    // Obtener el desplazamiento vertical
    let scrollPosition = window.scrollY || window.pageYOffset;

    // Definir el valor de desplazamiento solo horizontal (hacia la izquierda)
    let moveLeft = scrollPosition * 2.4; // Ajusta la velocidad con este valor

    // Aplicar el estilo de transformación solo para mover a la izquierda
    let palmera = document.getElementById('palmera');
    palmera.style.transform = `translateX(-${moveLeft}px)`;
});

window.addEventListener('scroll', function() {
    // Obtener el desplazamiento vertical
    let scrollPosition = window.scrollY || window.pageYOffset;

    // Definir el valor de desplazamiento solo horizontal (hacia la derecha)
    let moveRight = scrollPosition * 2.4; // Ajusta la velocidad con este valor

    // Aplicar el estilo de transformación para mover a la derecha
    let palmera = document.getElementById('palmera2');
    palmera.style.translate = `${moveRight}px`; // Sumar para mover a la derecha
});

//ramas 

window.addEventListener('scroll', function() {
    // Obtener el desplazamiento vertical
    let scrollPosition = window.scrollY || window.pageYOffset;

    // Definir el valor de desplazamiento solo horizontal (hacia la izquierda)
    let moveLeft = scrollPosition * 2.8; // Ajusta la velocidad con este valor

    // Aplicar el estilo de transformación solo para mover a la izquierda
    let palmera = document.getElementById('rama');
    palmera.style.translate = `-${moveLeft}px`;
});


window.addEventListener('scroll', function() {
    // Obtener el desplazamiento vertical
    let scrollPosition = window.scrollY || window.pageYOffset;

    // Definir el valor de desplazamiento solo horizontal (hacia la derecha)
    let moveRight = scrollPosition * 2.8; // Ajusta la velocidad con este valor

    // Aplicar el estilo de transformación para mover a la derecha
    let palmera = document.getElementById('rama2');
    palmera.style.translate = `${moveRight}px`; // Sumar para mover a la derecha
});


window.addEventListener('scroll', function() {
    // Obtener la posición de desplazamiento (scroll) en el eje Y
    let scrollPosition = window.scrollY || window.pageYOffset;
    
    // Calcular el valor del blur en función de la posición del scroll (cuanto más bajes, menos blur)
    let blurValue = Math.min(scrollPosition / 10, 15); // Limitar el valor máximo de blur a 15px

    // Obtener el contenedor imgContainer
    let imgContainer = document.querySelector('.imgContainer');

    // Aplicar el filtro blur al contenedor imgContainer
    imgContainer.style.filter = `blur(${15 - blurValue}px)`;
});
