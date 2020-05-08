const typedOptions = {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    smartBackspace: true,
    loop: true
};

let typed = new Typed('#typed', typedOptions);
typed.stop();

$(document).ready(() => {
    setTimeout(() => typed.start(), 500);

});
