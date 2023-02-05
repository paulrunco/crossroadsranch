document.addEventListener("scroll", (event) => {
    var mainLogo = document.querySelector(".logo--small");
    var scrollPosition = window.scrollY;
    var width = window.innerWidth;
    if (scrollPosition > 200 && width > 425) {
        mainLogo.style.display = "block";   
    } else {
        mainLogo.style.display = "none";   
    }
});

function toggleNavigation() {
    var nav = document.getElementById("nav-items");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}