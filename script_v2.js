const buttonStart = document.getElementById('buttonStart');
const introSelvagem = document.getElementById('introSelvagem');
const selvagemProgram = document.getElementById('selvagemProgram');

buttonStart.addEventListener('click', () => {
    introSelvagem.style.opacity = '0';

    setTimeout(() => {
        introSelvagem.style.display = 'none';
        selvagemProgram.style.display = 'block';

        setTimeout(() => {
            selvagemProgram.style.opacity = '1';
        }, 50); 
    }, 400); 
});
