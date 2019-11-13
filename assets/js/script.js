//#region Portfolio scroll

function scrollTo(elementID) {
    document.getElementById(elementID).scrollIntoView();
}

document.getElementById("concepts-btn").onclick = function() {
    scrollTo("concepts");
}

document.getElementById("characters-btn").onclick = function() {
    scrollTo("characters");
}

document.getElementById("traditional-btn").onclick = function() {
    scrollTo("traditional");
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
    
    if (st > lastScrollTop && st > navbarHeight){
        $('footer').removeClass('nav-down').addClass('nav-up');
    } else {
        if ((st + $(window).height() < $(document).height())) {
            $('footer').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

document.getElementById("scrollup-icon").onclick = function() {
    scrollTo("main-header");
}

//#endregion