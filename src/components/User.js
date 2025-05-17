import { deleteData, editData } from "../utils/callApi"

const BASEURL = "http://localhost:8080"

export default function (item) {
    const tr = document.createElement("tr")
    const fullName = document.createElement("td")
    const actions = document.createElement("td")

    const btnEdit = document.createElement("button")
    const btnDelete = document.createElement("button")

    fullName.textContent = item.fullName
    btnEdit.textContent = "edit"
    btnDelete.textContent = "delete"

    tr.append(fullName, actions)
    actions.append(btnEdit, btnDelete)

    btnDelete.onclick = async () => {
        const res = await deleteData("/users/" + item.id)

        if (res) {
            tr.remove()
            return
        }
        alert("Error")
     
    }

    btnEdit.onclick = async () => {
        const newName = prompt("Введите имя")
        const res = await editData("/users/" + item.id, {fullName: newName} )


        if (res) {
            // при необходимости обновите UI здесь
            fullName.textContent = newName
        } else {
            console.error("Ошибка при обновлении пользователя");
        }
    }


    return tr
}