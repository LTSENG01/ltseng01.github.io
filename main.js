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
        rocketSelector.addClass("animate__animated animate__fadeIn");
        rocketSelector.show();
        $(".fa-chevron-down").hide();

        setTimeout(() => {
            $("#main-rocket").hide();
            $(".fa-chevron-down").show();
        }, 1500);
    });
});
