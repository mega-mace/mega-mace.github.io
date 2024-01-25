function showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show")
}

function show1980s() {
    document.getElementById("1980s").classList.toggle("show")
    document.getElementById("1990s").classList.remove("show")
    document.getElementById("2000s").classList.remove("show")
    document.getElementById("2010s").classList.remove("show")
    document.getElementById("2020s").classList.remove("show")
}

function show1990s() {
    document.getElementById("1980s").classList.remove("show")
    document.getElementById("1990s").classList.toggle("show")
    document.getElementById("2000s").classList.remove("show")
    document.getElementById("2010s").classList.remove("show")
    document.getElementById("2020s").classList.remove("show")
}

function show2000s() {
    document.getElementById("1980s").classList.remove("show")
    document.getElementById("1990s").classList.remove("show")
    document.getElementById("2000s").classList.toggle("show")
    document.getElementById("2010s").classList.remove("show")
    document.getElementById("2020s").classList.remove("show")
}

function show2010s() {
    document.getElementById("1980s").classList.remove("show")
    document.getElementById("1990s").classList.remove("show")
    document.getElementById("2000s").classList.remove("show")
    document.getElementById("2010s").classList.toggle("show")
    document.getElementById("2020s").classList.remove("show")
}

function show2020s() {
    document.getElementById("1980s").classList.remove("show")
    document.getElementById("1990s").classList.remove("show")
    document.getElementById("2000s").classList.remove("show")
    document.getElementById("2010s").classList.remove("show")
    document.getElementById("2020s").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.getElementById("myDropdown").classList.remove("show")
        document.getElementById("1980s").classList.remove("show")
        document.getElementById("1990s").classList.remove("show")
        document.getElementById("2000s").classList.remove("show")
        document.getElementById("2010s").classList.remove("show")
        document.getElementById("2020s").classList.remove("show")
    }
}