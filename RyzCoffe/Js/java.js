// toogle class active
const navBarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik 
document.querySelector('#hamburgermenu').
onclick = () => {
    navBarNav.classList.toggle('active');
};

// klik di luar side bar agar menghilangkan menubar
const hamburger = document.querySelector('#hamburgermenu')

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target)&& !navBarNav.contains(e.target)){
        navBarNav.classList.remove('active');
    }
});