//click bars to open sidebar  
const barsIcon = document.querySelector('.js-bars');

barsIcon.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
  });

//click x to close sidebar

const xIcon = document.querySelector('.js-x');

xIcon.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
  });