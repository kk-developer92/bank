export function component(item) {

    let wallet = document.createElement("div")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    wallet.classList.add("wallet")
    p.classList.add("val")

    h2.textContent = item.name
    p.textContent = item.currency

    wallet.append(h2,p)

    return wallet
}