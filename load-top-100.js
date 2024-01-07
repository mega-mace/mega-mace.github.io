dropdownItems = document.getElementsByClassName("dditem")
for (const dropdownItem of dropdownItems) {
    dropdownItem.addEventListener("click", e => {
        const page = dropdownItem.innerHTML
        loadContent(dropdownItem.innerHTML)
    })
}

function loadContent(pageName) {
    document.getElementById("year-select").innerHTML = pageName 
    document.getElementById('text-body').src = `/markdown-files/top-100/${pageName}.md`
    document.title = `Top 100 Games - ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}