
import './style.css'

const form = document.forms.namedItem('form');
const BASEURL = "http://localhost:8080"

form.onsubmit = async (e) => {
  e.preventDefault()


  const user = {
    name: document.getElementById('name').value.trim(),
    currency: document.getElementById('currency').value.trim(),

  };


    const res = await fetch( BASEURL + "/wallets", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json"
      }
    })

    console.log(res);

 if (res.status !== 201 ) {
      alert(res.statusText)
      return
    }
};
