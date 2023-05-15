// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

links.forEach(link => {
    // Check if the link href matches the current URL
    if (link.href === window.location.href) {
      // Add the active class to the link
      link.classList.add('active');
    }
  });

