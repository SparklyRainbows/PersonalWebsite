//#region Portfolio scroll

function scrollTo(elementID) {
    document.getElementById(elementID).scrollIntoView();
}

document.getElementById("concepts-btn").onclick = function() {
    scrollTo("concepts");
}

document.getElementById("studies-btn").onclick = function() {
    scrollTo("studies");
}

document.getElementById("paintings-btn").onclick = function() {
    scrollTo("paintings");
}
//#endregion

//#region Show footer
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('footer').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st < 100) {
        $('footer').removeClass('nav-up').addClass('nav-down');
        return;
    }
    
    if (st > lastScrollTop && st > navbarHeight){
        $('footer').removeClass('nav-up').addClass('nav-down');
    } else {
        if ((st + $(window).height() < $(document).height())) {
            $('footer').removeClass('nav-down').addClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}

document.getElementById("scrollup-icon").onclick = function() {
    scrollTo("navbar");
}

//#endregion