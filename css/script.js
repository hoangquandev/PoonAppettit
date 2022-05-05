var typed = new Typed(".typing",{
    strings:["","bà con ơi"],
    typeSpeed: 200,
    BackSpeed: 60,
    loop:true
})
var typed = new Typed(".typing1",{
    strings:["","con bà bảy"],
    typeSpeed: 200,
    BackSpeed: 60,
    loop: true
})

// hamburger
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});