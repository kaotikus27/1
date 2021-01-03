var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var modalBtnn = document.querySelector('.modal-btnn');
var modalBgg = document.querySelector('.modal-bgg');
var modalClosee = document.querySelector('.modal-closee');
var modalBtnnn = document.querySelector('.modal-btnnn');
var modalBggg = document.querySelector('.modal-bggg');
var modalCloseee = document.querySelector('.modal-closeee');

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});


modalBtnn.addEventListener('click', function() {
    modalBgg.classList.add('bg-activee');
});

modalClosee.addEventListener('click', function() {
    modalBgg.classList.remove('bg-activee');
});

modalBtnnn.addEventListener('click', function() {
    modalBggg.classList.add('bg-activeee');
});

modalCloseee.addEventListener('click', function() {
    modalBggg.classList.remove('bg-activeee');
});