function showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.getElementById("myDropdown").classList.remove("show")
    }
}