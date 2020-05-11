const typedOptions = {
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1000,
    smartBackspace: true,
    loop: true
};

let typed = new Typed('#typed', typedOptions);
typed.stop();

$(document).ready(() => {
    setTimeout(() => typed.start(), 500);
    $("#main-rocket").hide();

    $("#main-chevron").click((e) => {
        let rocketSelector = $("#main-rocket");
        let chevronSelector = $(".fa-chevron-down");
        rocketSelector.addClass("animate__animated animate__fadeIn");
        rocketSelector.show();
        chevronSelector.hide();

        setTimeout(() => {
            rocketSelector.hide();
            chevronSelector.show();
        }, 1500);
    });
});
