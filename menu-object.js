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

export function createCategory(btn, popup, input, createDiv) {
    const $btn = d.querySelector(btn),
    $popup = d.querySelector(popup),
    $categoryContent = d.querySelector(".category"),
    $input = d.querySelector(input)

    $btn.addEventListener("click", e => {
        let menu = getData("menu")
        if($input.vale != ""){
            let key = $input.value.toLowerCase()
            key = key.replace(/[^a-z0-9]/g, '')
            key = key.replace(/\s/g, '_')

            if(Object.prototype.hasOwnProperty.call(menu, key)){
                alert("Esa categoría ya existe")
            }
            else{
                console.log(key);
                menu[key] = []
                if(Object.prototype.hasOwnProperty.call(menu, "options_names")){
                    menu.options.push($input.value)
                    menu.options_names.push(key)
                }
                else{
                    menu.options = [$input.value]
                    menu.options_names = [key]
                }
                ls.setItem("menu", JSON.stringify(menu))

                createDiv($input.value, [])

                $input.value = ""

                $popup.classList.add("hidden")
                setTimeout(() => {
                    $popup.classList.add("none")
                    $categoryContent.classList.add("none")
                }
                , 500);
            }
        }
    })
}