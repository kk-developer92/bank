import User from './components/User'
import reload from './utils/reload'

import './style.css'
import { getData, postData } from './utils/callApi'

const tbody = document.querySelector("tbody")
const form = document.forms.namedItem("add")


form.onsubmit = async (e) => {
  e.preventDefault()

  const user = {
    id: crypto.randomUUID(),
    fullName: new FormData(e.target).get("fullname"),
    createdAt: new Date().toDateString()
  }

  if (user.fullName.trim() !== "") {
    await postData("/users", user)

    const users = await getData("/users")
    reload(users, User, tbody)
  }

}


const users = await getData("/users")
reload(users, User, tbody)