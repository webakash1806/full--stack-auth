const endpointUrl = "http://localhost:5001/login"


document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            Headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()
        console.log(data)
    }
    catch (e) {
        console.log(e)
    }
})