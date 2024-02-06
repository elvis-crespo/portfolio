//scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

//Toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY; //Actual desplazamiento
        const offset = sec.offsetTop - 100; //calcula la posición superior de la sección actual menos 100 píxeles.
        const height = sec.offsetHeight; //obtiene la altura de la sección actual.
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //active sections for animation
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });


    //Sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    const footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

