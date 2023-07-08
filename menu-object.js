import { createProductPopup, deleteCatBtn } from "./landing-btns.js"
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
                menu[key] = {
                    options: [],
                    descriptions: [],
                    prices: []
                }
                if(Object.prototype.hasOwnProperty.call(menu, "options_names")){
                    menu.options.push($input.value)
                    menu.options_names.push(key)
                }
                else{
                    menu.options = [$input.value]
                    menu.options_names = [key]
                }
                ls.setItem("menu", JSON.stringify(menu))

                createDiv($input.value, {
                    options: [],
                    descriptions: [],
                    prices: []
                })

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

export function loadCat(){
    const menu = getData("menu"),
    $categoriesDiv = d.querySelector(".categories")
    
    if(Object.prototype.hasOwnProperty.call(menu, "options")){
        const options = menu.options
        options.forEach(option => {
            const $div = d.createElement("div"),
            $title = d.createElement("h3"),
            $delete = d.createElement("img"),
            $productsDiv = d.createElement("div"),
            $btn = d.createElement("button")
    
            $div.classList.add("cat-div")
    
            $delete.setAttribute("src", "delete.png")
            $delete.setAttribute("alt", "Borrar categoría")
    
            $delete.classList.add("delete-cat")
            
            $title.classList.add("cat-title")
            $title.textContent = option
    
            $btn.classList.add("add-product")
    
            $productsDiv.classList.add("products")
    
            $btn.textContent = "Añadir plato"
    
            $div.appendChild($delete)
            $div.appendChild($title)
            $div.appendChild($productsDiv)
            $div.appendChild($btn)
            $categoriesDiv.appendChild($div)
    
            $btn.addEventListener("click", e => {
                createProductPopup(e.target)
            })
            deleteCatBtn(".delete-cat")
    
        });
    }
}

export function createProduct(btn) {
    const $btn = d.querySelector(btn),
    $popup = d.querySelector(".popup-div")

    $btn.addEventListener("click", e => {
        const category = $popup.getAttribute("data-category"),
        $name = d.querySelector(".product-name"),
        $price = d.querySelector(".product-price"),
        $desc = d.querySelector(".product-desc"),
        menu = getData("menu"),
        index = menu.options.indexOf(category),
        objName = menu.options_names[index]

        if($name.value != "" && $price.value != ""){
            menu[objName].options.push($name.value)
            menu[objName].prices.push($price.value)
            menu[objName].descriptions.push($desc.value)
    
            ls.setItem("menu", JSON.stringify(menu))
        }
        else alert("Dejaste algún campo vacío")
    })
}