/*animação de estrelas*/

const sky = document.querySelector('.sky');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.setProperty('--star-position', Math.random());
    sky.appendChild(star);

    //Remove a animação depois que as estrelas termina
    setTimeout(() => {
        star.remove();
        }, 3000);//tempo de animação
}

//Criar uma nova estrela a cada 100ms
setInterval(createStar, 100);


/*Menu hamburguer x*/

const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click',() => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block'
    } else {
        nav.style.display = 'none'
    }
}