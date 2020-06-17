var labels_button = document.querySelector(".labels_button");
var labels_wrapper = document.querySelector(".labels_wrapper");
b = true;
labels_button.addEventListener("click",function(){//点击事件
    if(b){
        labels_wrapper.style.display = "block";
    }else {
        labels_wrapper.style.display = "none";
    }
    b =! b;
});

var pepsi = document.querySelectorAll(".product_container > div");
var hov = document.querySelectorAll(".hover");
var pepsi_img = document.querySelectorAll(".pepsi > img");

for(var i=0;i<pepsi.length;i++){
    pepsi[i].index = i;
    pepsi[i].bool = true;
    pepsi[i].addEventListener("click",function(){
        if(this.bool){
            hov[this.index].style.display = "block";
            pepsi_img[this.index].style.transform = "scale(1.5) translatey(100px)";
            this.style.color = "white";
        }else {
            hov[this.index].style.display = "none";
            pepsi_img[this.index].style.transform = "scale(1) translatey(0)";
            this.style.color = "#BFBFBF";
        }
        this.bool =! this.bool;
    });
    pepsi[i].addEventListener("mouseenter",function(){
        hov[this.index].style.display = "block";
    });
    pepsi[i].addEventListener("mouseleave",function(){
        if(this.bool){
            hov[this.index].style.display = "none";
        }
    });
}















