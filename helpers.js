function showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show")
}

function scrollToTop() {
    document.getElementById("div-body").scrollTop = 0
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.getElementById("myDropdown").classList.remove("show")
    }
}
