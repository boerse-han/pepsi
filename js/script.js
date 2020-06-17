var btn1 = document.querySelector(".hero-button");
    h_1 = document.querySelector(".promotion-left h1");
    p_1 = document.querySelector(".promotion-left p");
    a_1 = document.querySelector(".promotion-left a");
    promotion_right = document.querySelector(".promotion-right");
    pepsi = document.querySelector(".pepsi");
    h_2 = document.querySelector(".promotion-1 h1");
    carousel = document.querySelector(".promotion-1 .carousel");
    promotion_left1 = document.querySelector(".promotion-left1");
    img_1 = document.querySelector(".promotion-right1 img");
    promotion_video1 = document.querySelector(".promotion-video1");
    h_3 = document.querySelector(".socior-h1 h1");
    socior_item_1 = document.querySelector(".socior-item-1");
    socior_item_2 = document.querySelector(".socior-item-2");
    socior_item_3 = document.querySelector(".socior-item-3");
    socior_item_4 = document.querySelector(".socior-item-4");
btn1.addEventListener("click",function(){
    window.scrollTo(0, 800);
    //window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth'
    //    })
});
var top1 = document.querySelector(".top");
top1.addEventListener("click",function(){
    window.scrollTo(0,0);
});
if(window.innerWidth < 600){
    window.onscroll = function(){
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            h_1.classList.add('animation1');
            p_1.classList.add('animation1');
            a_1.classList.add('animation1');
            promotion_right.classList.add("animation2");
        }if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            pepsi.classList.add('animation1');
            h_2.classList.add("animation2");
            carousel.classList.add("animation2");
        }if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
            promotion_left1.classList.add('animation1');
            img_1.classList.add("animation2");
            promotion_video1.classList.add("animation2");
        }if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
            h_3.classList.add('animation3');
            socior_item_1.classList.add("animation3");
            socior_item_2.classList.add("animation3");
            socior_item_3.classList.add("animation3");
            socior_item_4.classList.add("animation3");
        }
    };
}else {
    window.onscroll = function(){
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            h_1.classList.add('animation1');
            p_1.classList.add('animation1');
            a_1.classList.add('animation1');
            promotion_right.classList.add("animation2");
        }if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
            pepsi.classList.add('animation1');
            h_2.classList.add("animation2");
            top1.style.display = "block";
            carousel.classList.add("animation2");
        }else {
            top1.style.display = "none";
        }
        if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
            promotion_left1.classList.add('animation1');
            img_1.classList.add("animation2");
            promotion_video1.classList.add("animation2");
        }if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
            h_3.classList.add('animation3');
            socior_item_1.classList.add("animation3");
            socior_item_2.classList.add("animation3");
            socior_item_3.classList.add("animation3");
            socior_item_4.classList.add("animation3");
        }
    };
}
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项

    autoplay: true,//自动切换

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination'
    },

    // 如果需要前进后退按钮
    //navigation: {
    //    nextEl: '.swiper-button-next',
    //    prevEl: '.swiper-button-prev'
    //}
});
