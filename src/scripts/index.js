import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Typed from 'typed.js';
import '../styles/css/main.css';

// typing animation
const typed = new Typed('.typing', {
  strings: [
    'Front-End Web Developer',
    'Blogger',
    'Content Creator',
    'Freelancer',
  ],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});

// Custom Cursor
let cursor1 = document.querySelector('.cursor__1');
let cursor2 = document.querySelector('.cursor__2');

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
};

document.querySelectorAll('a').forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
  };

  links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
  };
});
