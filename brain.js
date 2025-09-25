const navbarToggle = document.querySelector('.navbar-toggler');
const sidebar = document.querySelector('#sidebar');
const sidebarUl = document.querySelector('#sidebar ul');

navbarToggle.addEventListener('click',()=>{
    sidebar.classList.toggle('slide')
    console.log("hello")
})

sidebarUl.addEventListener('click',slideRemove)

function slideRemove(){
    sidebar.classList.remove('slide')
}