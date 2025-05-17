const BASEURL = import.meta.env.VITE_PUBLIC_BASE_URL


export async function getData (resourse) {
    try {
        const res = await fetch(BASEURL + resourse)

        if (!res.ok ) {
            alert(res.statusText)
            return
        }


        const user = await res.json()
        return user

    } catch (error) {
        alert(error.message)
    }
}

export async function postData (resourse, body) {
    try {
        const res = await fetch(BASEURL + resourse, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
        })

        if (!res.ok ) {
            alert(res.statusText)
            return
        }


        const user = await res.json()
        return user

    } catch (error) {
        alert(error.message)
    }
}

export async function deleteData (resourse) {
    try {
        const res = await fetch(BASEURL + resourse, {
            method: "DELETE"
        })

        if (!res.ok ) {
            alert(res.statusText)
            return
        }


        const user = await res.json()
        return user

    } catch (error) {
        alert(error.message)
    }
}


export async function editData (resourse, body) {
    try {
        const res = await fetch(BASEURL + resourse, {
            method: "PATCH",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
        })

        if (!res.ok ) {
            alert(res.statusText)
            return null
        }


        const user = await res.json()
        return user

    } catch (error) {
        alert(error.message)
    }
}