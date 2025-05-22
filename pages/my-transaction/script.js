import { component } from "./utils/add.js"
import { reload } from "./utils/reload.js"

const BASEURL = "http://localhost:8080"

let res = await fetch(BASEURL + "/payments")
let users = await res.json()

let place = document.querySelector("tbody")

reload(users, component, place)