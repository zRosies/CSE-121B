// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const navLinks = document.querySelectorAll('nav ul li a');

const links = document.querySelectorAll('nav a');

// Loop through each link
links.forEach(link => {
  // Check if the link href matches the current URL
  if (link.href === window.location.href) {
    // Add the active class to the link
    link.classList.add('active');
  }
});