var index = 0;
var imgList = document.querySelector(".img-list");
var imgs = imgList.querySelectorAll("img");
var mainImg = document.querySelector(".main-img img");

console.log(imgs);

function Selection(newIndex){
    imgs[index].classList.remove("selected");
    imgs[newIndex].classList.add("selected");
    mainImg.src = imgs[newIndex].src;
    index = newIndex;
}
function Shuffle() {
    for (let i = imgs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgs[i].src, imgs[j].src] = [imgs[j].src, imgs[i].src];
    }
}
document.getElementById("forward").addEventListener("click", function(){
    if(index !== imgs.length-1)
        Selection(index+1);
});
document.getElementById("back").addEventListener("click", function(){
    if(index !== 0)
        Selection(index-1);
});
document.getElementById("start").addEventListener("click", function(){
    if(index !== 0)
        Selection(0);
});
document.getElementById("end").addEventListener("click", function(){
    if(index !== imgs.length-1)
        Selection(imgs.length-1);
});
document.getElementById("shuffle").addEventListener("click", function(){
    Shuffle();
    Selection(0);
});

