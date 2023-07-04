const d = document

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