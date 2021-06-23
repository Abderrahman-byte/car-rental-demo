const navElt = document.getElementById('nav')
const toggleBtn = document.getElementById('nav-toggler')

toggleBtn.addEventListener('click', () => {
    navElt.classList.toggle('show')
})