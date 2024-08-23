document.addEventListener('DOMContentLoaded', () => {
    const pal2 = document.getElementById('pal2')
    const perc = document.getElementById('perc')
    const tinta = document.getElementById('tinta')
    const perso = document.getElementById('perso')
    const formContainer = document.getElementById('form-container')

    perc.style.height = window.innerWidth <= 768 ? '0px' : '0px'

    const initialBottomValue = window.innerWidth <= 768 ? '875px' : '875px'
    pal2.style.bottom = initialBottomValue

    setTimeout(() => {
        const heightValue = window.innerWidth <= 768 ? '75vh' : '85vh'
        const bottomValue = window.innerWidth <= 768 ? '150px' : 'calc(46px)'

        perc.style.height = heightValue
        perc.style.transition = 'height 1.5s ease'

        pal2.style.bottom = bottomValue
        pal2.style.transition = 'bottom 1.5s ease'
        
        if (perc.clientHeight > 0) {
            tinta.classList.add('bounce')
        }
    }, 100);

    tinta.addEventListener('click', () => {
        tinta.classList.remove('bounce')
        tinta.style.animation = 'none' 
        
        perso.style.display = 'block'
        perso.style.position = 'absolute'
        perso.style.left = '50%'
        perso.style.top = '5%'
        perso.style.transform = 'translateX(-50%)'
        perso.style.opacity = '0'
        perso.style.transition = 'opacity 0.5s ease'

        setTimeout(() => {
            perso.style.opacity = '1'
        }, 10)

        setTimeout(() => {
            formContainer.style.display = 'block'
            formContainer.style.opacity = '0'
            formContainer.style.transition = 'opacity 0.5s ease'
            setTimeout(() => {
                formContainer.style.opacity = '1'
            }, 10);
        }, 500);
    });
});