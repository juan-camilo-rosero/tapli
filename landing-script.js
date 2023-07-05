import { closePopup, openCatPopup, returnPage, start, transitionMenu } from "./landing-btns.js"
import { createCategory, getMenu } from "./menu-object.js"

const d = document

start(".try-now")
transitionMenu(".name-continue")
getMenu()
returnPage()
closePopup(".popup-close", ".popup-div")
openCatPopup(".add-cat", ".popup-div")
createCategory(".create-cat", ".popup-div", ".category-input")