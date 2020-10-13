@@include('actions.js')
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.header__body, .content, .header__logo,.burger__btn').toggleClass('active');
        $('body').toggleClass('lock');
    });
});