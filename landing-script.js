import { returnPage, start, transitionMenu } from "./landing-btns.js"
import { getMenu } from "./menu-object.js"

const d = document

start(".try-now")
transitionMenu(".name-continue")
getMenu()
returnPage()