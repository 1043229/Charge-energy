var fotos = ["slideshow1.png", "slideshow2.png", "slideshow3.png",];

var test;
var indexSlide =0;



window.onload =function(){
    test = document.getElementById("test");
    setInterval(slideShow, 1000);
}



function slideShow(){
    test.style.backgroundImage = "url(images/" + fotos[indexSlide] + ")";
    indexSlide++;
    if(indexSlide == fotos.length){
        indexSlide = 0;
    }
}