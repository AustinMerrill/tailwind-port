const nav = document.getElementById('nav');
const toggleOpen = document.getElementById('toggleOpen');
const toggleClose = document.getElementById('toggleClose');

toggleOpen.addEventListener('click', ()=> {
    toggleOpen.classList.toggle('hidden')
    toggleClose.classList.toggle('hidden')
    nav.classList.toggle('hidden')
})

toggleClose.addEventListener('click', () => {
    toggleOpen.classList.toggle('hidden')
    toggleClose.classList.toggle('hidden')
    nav.classList.toggle('hidden')
})