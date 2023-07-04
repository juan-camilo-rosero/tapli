import { getData } from "./ls.js"

const d = document,
ls = localStorage,
resName = d.querySelector(".name input").value

export function getMenu() {
    const $mainSec = d.querySelector(".landing-content"),
    $menuSec = d.querySelector(".menu-sec"),
    $title = d.querySelector("h1")

    let menu = getData("menu")

    // Cambiar a la pantalla del menú y cambiar el título por el nombre del restaurante

    if (Object.prototype.hasOwnProperty.call(menu, "name")){
        $mainSec.classList.add("hidden")
            setTimeout(() => {
                $mainSec.classList.add("none")
            }, 500);
            $menuSec.classList.remove("none")
            setTimeout(() => {
                $menuSec.classList.remove("hidden")
            }, 500);
            $title.textContent = menu.name
    }
    // Si no hay nada guardado, crear el objeto en el localStorage con el nombre de menu
    else{
        ls.setItem("menu", JSON.stringify({}))
    }
}