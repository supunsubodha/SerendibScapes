images = [];
i=0;
time=2000;

images[0] = "images/slides/1.jpg";
images[1] = "images/slides/2.jpg";
images[2] = "images/slides/3.jpg";
images[3] = "images/slides/4.jpg";
images[4] = "images/slides/5.jpg";

function changeImage(){
    document.getElementsByName("slide")[0].src = images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i=0;
    }
    setTimeout(changeImage, time);
}
window.onload = changeImage;