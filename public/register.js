
const endpointUrl = "https://jwtauthbackend.onrender.com/register"

document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault()

    const userName = document.getElementById("userName").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const bio = document.getElementById("bio").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value

    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userName, name, email, bio, password, confirmPassword })
        })
        const data = await response.json()
        console.log(data)

        if (response.status === 404 || response.status === 500) {
            document.getElementById("error").innerHTML = `** ${data.message}`
        }

        if (response.ok) {
            const successBtn = document.createElement("div")
            successBtn.classList.add("success-btn")
            successBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Registered Successfully`

            document.getElementById("successShow").appendChild(successBtn)

            setTimeout(dataLoad, 1300);

            function dataLoad() {
                window.location.href = "https://jwtauthbackend.onrender.com/login.html"
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})

