export function component(item) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")

    td1.innerHTML = item.id
    td2.innerHTML = item.wallet
    td3.innerHTML = item.categorie
    td4.innerHTML = item.sum
    td5.innerHTML = item.date

    tr.append(td1, td2, td3, td4, td5)

    return tr
}