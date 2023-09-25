function openMenu() {
    document.getElementById("btn-menu").style.display = "none"
    document.getElementById("head").style.height = "50vh"
    document.getElementById("menu-items").style.display = "block"
    document.getElementById("btn-close").style.display = "block"
}

function closeMenu() {
    document.getElementById("btn-menu").style.display = "block"
    document.getElementById("head").style.height = "8vh"
    document.getElementById("menu-items").style.display = "none"
    document.getElementById("btn-close").style.display = "none"
}



function showSkill(skill) {

    let nodos = document.getElementById("lenguaje")
    
    for (let i = 0; i < nodos.children.length; i++) {
        nodos.children[i].style.display = "none"
    }

    switch (skill) {
        case 1:
            document.getElementById("back-p").style.display = "block"
            break;
        case 2:
            document.getElementById("front-p").style.display = "block"
            break;
        case 3:
            document.getElementById("others-p").style.display = "block"
            break;
        default:
            break;
    }
}

