
import './style.css'

const form = document.forms.namedItem('form');
const BASEURL = "http://localhost:8080"

form.onsubmit = async (e) => {
  e.preventDefault()


  const user = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    firstname: document.getElementById('firstname').value.trim(),
    password: document.getElementById('password').value.trim(),
  };


    const res = await fetch( BASEURL + "/users", {
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
