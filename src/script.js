const menuIcon = document.querySelector('#menuIcon')
const navBar = document.querySelector('#navBar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        const isInsideSection = top >= offset && top < offset + height;

        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(id)) {
                link.classList.toggle('active', isInsideSection);
            } else {
                link.classList.remove('active');
            }
        });
    });

    const header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
};
