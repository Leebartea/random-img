var randomFigure = 1 + Math.random() * 10;
randomFigure = Math.floor(randomFigure); 

var randomImgSrc = "./quote images" + "/quote" + randomFigure + ".webp"

document.querySelector("img").setAttribute("height", "350px");
document.querySelector("img").setAttribute("src", randomImgSrc)

