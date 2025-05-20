
import './style.css'

const form = document.forms.namedItem('form');
const BASEURL = "http://localhost:8080"

form.onsubmit = async (e) => {
  e.preventDefault()


  const user = {
    wallet: document.getElementById('wallet').value.trim(),
    sum: document.getElementById('sum').value.trim(),
    categorie: document.getElementById('categorie').value.trim(),
  };


    const res = await fetch( BASEURL + "/payments", {
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
