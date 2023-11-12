// const navbar = document.querySelector("nav");
// const abrir = document.querySelector("abrir");
// const cerrar = document.querySelector("cerrar"); 

// navbar.addEventListener("click", () => {
//     abrir.classList.add("visible");
// });

// navbar.addEventListener("click", () => {
//     cerrar.classList.remove("visible");
// });


window.addEventListener("DOMContentLoaded", () => {

    // console.log("DOM cargado")

    const navbar = document.querySelector("nav");
    const abrir = document.querySelector("abrir");
    const cerrar = document.querySelector("cerrar");

    navbar.addEventListener("click", () => {
        abrir.classList.toogle("visible");
    });
    
});

// navbar.addEventListener("click", () => {
//     cerrar.classList.remove("visible");
// });


