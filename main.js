document.querySelector(".nav-toggle").addEventListener("click", (e) => {
    document.querySelector(".main-nav ul").style.opacity = 1;
    document.querySelectorAll(".main-nav ul li").forEach(item => {
        item.style.transform = "translateX(0%)";

    })
    document.querySelector(".nav-toggle-close").style.display = "block"
})



document.querySelector(".nav-toggle-close").addEventListener("click", function () {
    setTimeout(() => {
        this.style.display = "none";
    }, 700)
    document.querySelector(".main-nav ul").style.opacity = 0;
    document.querySelectorAll(".main-nav ul li").forEach(item => {
        item.style.transform = "translateX(-100%)";
    })
})