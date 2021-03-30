var fotos = ["lilkleine.jpg", "boef.jpg", "ronnieflex.jpg"];

var test;
var indexSlide =0;



window.onload =function(){
    test = document.getElementById("test");
    setInterval(slideShow, 1500);
}



function slideShow(){
    test.style.backgroundImage = "url(images/" + fotos[indexSlide] + ")";
    indexSlide++;
    if(indexSlide == fotos.length){
        indexSlide = 0;
    }
}