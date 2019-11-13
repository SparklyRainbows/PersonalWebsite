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