var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlidesss");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,4000);
}

function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var top = document.getElementById('top');
        
        if(scroll > pxPantalla){
            top.style.right = 20 +'px';
        }
        else{
            top.style.right = -100 +'px';
        }
    })
}
irArriba(50);

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

