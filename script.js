const burgerTown1 = document.getElementById('burger-town-1');
burgerTown1.addEventListener('click', function () {
    console.log('¡Alguien hizo clic en BURGER TOWN! 1');
});

const burgerTown2 = document.getElementById('burger-town-2');
burgerTown2.addEventListener('click', function () {
    console.log('¡Alguien hizo clic en BURGER TOWN! 2');
});

const burgerTown3 = document.getElementById('burger-town-3');
burgerTown3.addEventListener('click', function () {
    console.log('¡Alguien hizo clic en BURGER TOWN! 3');
});

// Task 4
const titulo = document.getElementById('titulo-foto');
const arroces = document.querySelectorAll('.arroz');

for (const arroz of arroces) {
    arroz.addEventListener('click', function () {
        const colorOriginal = titulo.style.color;
        titulo.style.color = 'red';
        setTimeout(function () {
            titulo.style.color = colorOriginal;
        }, 400);
    });
}
