// Carrusel
const images = [
    "/muffins-03.jpg", 
    "/pastel1.jpg.jpg",
    "/imagen3.jpeg",
    "/imagen4.jpeg",
    "/imagen5.jpeg",
    "/imagen6.jpeg",
    "/imagen7.jpeg",
    "/imagen8.jpeg",
    "/imagen9.jpeg",
    "/imagen10.jpeg",
    "/imagen11.jpeg",
];
let currentIndex = 0;

function showImage(index) {
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".carousel-btn-prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.querySelector(".carousel-btn-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Formulario de Contacto
const contactForm = document.getElementById("contactForm");
const respuesta = document.getElementById("respuesta");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Validaciones (puedes agregar más según tus necesidades)
    if (nombre.trim() === "" || email.trim() === "") {
        respuesta.innerHTML = "Nombre y email son campos obligatorios.";
    } else if (telefono && !/^\d{10}$/.test(telefono)) {
        respuesta.innerHTML = "El teléfono debe tener 10 dígitos numéricos.";
    } else {
        respuesta.innerHTML = `<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Teléfono: ${telefono}</p>`;
    }
});
