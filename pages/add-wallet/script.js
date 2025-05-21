const form = document.forms.namedItem('form');
const BASEURL = "http://localhost:8080"

let name = document.getElementById('name')
let currency = document.getElementById('currency')

form.onsubmit = async (e) => {
  e.preventDefault()


  const user = {
    name: name.value.trim(),
    currency: currency.value.trim(),
  };


  await fetch(BASEURL + "/wallets", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json"
    }
  })


}


// import { component } from "../my_wallet/utils/add.js";
// import { reload } from "../my_wallet/utils/reload.js";


// const form = document.forms.namedItem('form');
// const BASEURL = "http://localhost:8080"
// let place = document.querySelector(".my-wallets")

// let name = document.getElementById('name')
// let currency = document.getElementById('currency')

// form.onsubmit = async (e) => {
//   e.preventDefault()


//   const user = {
//     name: name.value.trim(),
//     currency: currency.value.trim(),
//   };


//   await fetch(BASEURL + "/wallets", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-type": "application/json"
//     }
//   })

//   let res = await fetch(BASEURL + "/wallets")
//   let users = await res.json()

//   reload(users, component, place)
// } 