const endpointUrl = "https://jwtauthbackend.onrender.com/login"


document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ email, password }),
            credentials: "include"
        })

        const data = await response.json()
        // console.log(data)

        if (response.status === 404 || response.status === 500) {
            document.getElementById("error").innerHTML = `** ${data.message}`
        }

        if (response.ok) {
            const successBtn = document.createElement("div")
            successBtn.classList.add("success-btn")
            successBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Login Successfull`
            document.getElementById("successShow").appendChild(successBtn)
        }

        if (response.ok || data.message === "User is already loged in. Please logout") {

            setTimeout(dataLoad, 1300);

            function dataLoad() {
                window.location.href = "https://jwtauthbackend.onrender.com/user.html"
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})