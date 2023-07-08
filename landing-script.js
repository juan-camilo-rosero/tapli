import { closePopup, createCatDiv, createProductBtn, openCatPopup, returnPage, start, transitionMenu } from "./landing-btns.js"
import { createCategory, getMenu, loadCat } from "./menu-object.js"

const d = document

start(".try-now")
getMenu()
transitionMenu(".name-continue")
loadCat()
returnPage()
closePopup(".popup-close", ".popup-div")
openCatPopup(".add-cat", ".popup-div")
createCategory(".create-cat", ".popup-div", ".category-input", createCatDiv)
createProductBtn(".create-product")