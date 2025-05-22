const form = document.forms.namedItem('form');
const BASEURL = "http://localhost:8080"

form.onsubmit = async (e) => {
  e.preventDefault()


  const user = {
    id: Math.floor(Math.random() * 1000),
    wallet: document.getElementById('wallet').value.trim(),
    categorie: document.getElementById('categorie').value.trim(),
    sum: document.getElementById('sum').value.trim(),
    date: Math.floor(Math.random() * 3) + " дня назад"
  };


  const res = await fetch(BASEURL + "/payments", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json"
    }
  })
}