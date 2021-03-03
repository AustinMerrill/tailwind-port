const nav = document.getElementById('nav');
const toggleOpen = document.getElementById('toggleOpen');
const toggleClose = document.getElementById('toggleClose');
const h1Text =document.getElementById('h1Text');

toggleOpen.addEventListener('click', ()=> {
    toggleOpen.classList.toggle('hidden')
    toggleClose.classList.toggle('hidden')
    nav.classList.toggle('hidden')
    h1Text.classList.toggle('hidden')

})

toggleClose.addEventListener('click', () => {
    toggleOpen.classList.toggle('hidden')
    toggleClose.classList.toggle('hidden')
    nav.classList.toggle('hidden')
    h1Text.classList.toggle('hidden')
})