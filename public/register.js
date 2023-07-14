
const endpointUrl = "http://localhost:5001/register"

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
        if (response.ok) {
            const successBtn = document.createElement("div")
            successBtn.classList.add("success-btn")
            successBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Registered Successfully`

            document.getElementById("successShow").appendChild(successBtn)

            setTimeout(dataLoad, 1300);

            function dataLoad() {
                window.location.href = "http://localhost:5001/login.html"
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})

// const successBtn = document.createElement("div")
// successBtn.classList.add("success-btn")
// successBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Registered Successfully`

// document.getElementById("successShow").appendChild(successBtn)