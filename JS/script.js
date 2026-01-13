// Menu resposivo
    const navList = document.querySelector('#navList')
    const mobileMenu = document.querySelector('#mobileMenu')
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active')
    })
