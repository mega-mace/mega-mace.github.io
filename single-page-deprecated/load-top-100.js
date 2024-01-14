dropdownItems = document.getElementsByClassName("dditem")
for (const dropdownItem of dropdownItems) {
    dropdownItem.addEventListener("click", e => {
        const page = dropdownItem.innerHTML
        loadContent(dropdownItem.innerHTML)
    })
}

prev = document.getElementById('prev-page')
prev.addEventListener('click', e => {
    loadContent(prev.innerHTML)
})
next = document.getElementById('next-page')
next.addEventListener('click', e => {
    loadContent(next.innerHTML)
})

function loadContent(pageName) {
    document.getElementById("year-select").innerText = `${pageName} ▼` 
    document.getElementById('text-body').src = `/markdown-files/top-100/${pageName}.md`
    document.title = `Top 100 Games - ${pageName}`
    document.getElementById('div-body').scrollTop = 0
    document.getElementById('next-page').innerHTML = getNextPage(pageName)
    document.getElementById('prev-page').innerHTML = getPreviousPage(pageName)
}

function showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show")
}

function getNextPage(pageName) {
    if (pageName === 'Introduction') {
        return 'Summary'
    } else if (pageName === 'Summary') {
        return '1985'
    } else if (pageName === '2023') {
        return ''
    } else {
        return parseInt(pageName) + 1
    }
}

function getPreviousPage(pageName) {
    if (pageName === 'Introduction') {
        return ''
    } else if (pageName === 'Summary') {
        return 'Introduction'
    } else if (pageName === '1985') {
        return 'Summary'
    } else {
        return parseInt(pageName) - 1
    }
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