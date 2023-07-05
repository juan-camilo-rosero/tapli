const d = document,
ls = localStorage

export function start(btn) {
    const $landingContent = d.querySelector(".landing-content"),
    $btn = d.querySelector(btn),
    $name = d.querySelector(".name")

    $btn.addEventListener("click", e => {
        $landingContent.classList.add("hidden")
        setTimeout(() => {
            $landingContent.classList.add("none")
        }, 500);
        $name.classList.remove("none")
        setTimeout(() => {
            $name.classList.remove("hidden")
        }, 500);
    })
}

export function transitionMenu(btn) {
    const $name = d.querySelector(".name"),
    $btn = d.querySelector(btn),
    $menuSec = d.querySelector(".menu-sec"),
    $input = d.querySelector(".name input"),
    $title = d.querySelector("h1")

    $btn.addEventListener("click", e => {
        console.log("uwun't");
        if($input.value != ""){
            $name.classList.add("hidden")
            setTimeout(() => {
                $name.classList.add("none")
            }, 500);
            $menuSec.classList.remove("none")
            setTimeout(() => {
                $menuSec.classList.remove("hidden")
            }, 500);

            ls.setItem("menu", JSON.stringify({
                name: $input.value
            }))
            $title.textContent = $input.value
        }
        else{
            alert("Debes introducir el nombre de tu restaurante")
        }
    })
}

export function returnPage() {
    const $menuSec = d.querySelector(".menu-sec"),
    $name = d.querySelector(".name"),
    $btn = d.querySelector(".return")

    $btn.addEventListener("click", e => {
        if ($menuSec.classList.contains("hidden")){
            console.log("uwu");
        }

        else{
            $menuSec.classList.add("hidden")
            setTimeout(() => {
                $menuSec.classList.add("none")
            }, 500);
            $name.classList.remove("none")
            setTimeout(() => {
                $name.classList.remove("hidden")
            }, 500);
        }
    })
}

export function closePopup(closeBtn, popup) {
    const $btn = d.querySelector(closeBtn),
    $popup = d.querySelector(popup),
    $categoryContent = d.querySelector(".category")

    $btn.addEventListener("click", e => {
        $popup.classList.add("hidden")
        setTimeout(() => {
            $popup.classList.add("none")
            $categoryContent.classList.add("none")
        }
        , 500);
    })
}

export function openCatPopup(btn, popup) {
    const $btn = d.querySelector(btn),
    $popup = d.querySelector(popup),
    $categoryContent = d.querySelector(".category")

    $btn.addEventListener("click", e => {
        $popup.classList.remove("none")
        $categoryContent.classList.remove("none")
        setTimeout(() => $popup.classList.remove("hidden")
        , 100);
    })
}