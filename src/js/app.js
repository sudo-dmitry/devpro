document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.js-nav-button').onclick = function (){
        document.querySelector('.js-navbar').classList.toggle('no-nav');
        document.querySelector('.js-nav-button').classList.toggle('no-nav');
        document.querySelector('.js-logo').classList.toggle('no-nav');
        document.querySelector('.js-logo-color').classList.toggle('no-nav');
    };




    document.querySelector('.js-next').addEventListener('click', function (e) {
        if(e.target.classList.contains('active')) {
            document.querySelector('.js-next').classList.toggle('active');
            document.querySelector('.js-prev').classList.toggle('active');
            document.querySelector('.js-pag-next').classList.toggle('active');
            document.querySelector('.js-pag-prev').classList.toggle('active');
            document.querySelectorAll('.js-slide')[0].classList.toggle('move');
            document.querySelectorAll('.js-slide')[1].classList.toggle('move');
        }
    });
    document.querySelector('.js-prev').addEventListener('click', function (e) {
        if(e.target.classList.contains('active')) {
            document.querySelector('.js-next').classList.toggle('active');
            document.querySelector('.js-prev').classList.toggle('active');
            document.querySelector('.js-pag-next').classList.toggle('active');
            document.querySelector('.js-pag-prev').classList.toggle('active');
            document.querySelectorAll('.js-slide')[0].classList.toggle('move');
            document.querySelectorAll('.js-slide')[1].classList.toggle('move');
        }
    });
    document.querySelector('.js-pag-next').addEventListener('click', function (e) {
        if(e.target.classList.contains('active')) {
            document.querySelector('.js-next').classList.toggle('active');
            document.querySelector('.js-prev').classList.toggle('active');
            document.querySelector('.js-pag-next').classList.toggle('active');
            document.querySelector('.js-pag-prev').classList.toggle('active');
            document.querySelectorAll('.js-slide')[0].classList.toggle('move');
            document.querySelectorAll('.js-slide')[1].classList.toggle('move');
        }
    });
    document.querySelector('.js-pag-prev').addEventListener('click', function (e) {
        if(e.target.classList.contains('active')) {
            document.querySelector('.js-next').classList.toggle('active');
            document.querySelector('.js-prev').classList.toggle('active');
            document.querySelector('.js-pag-next').classList.toggle('active');
            document.querySelector('.js-pag-prev').classList.toggle('active');
            document.querySelectorAll('.js-slide')[0].classList.toggle('move');
            document.querySelectorAll('.js-slide')[1].classList.toggle('move');
        }
    });




});