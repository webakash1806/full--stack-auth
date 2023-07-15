const endpointUrl = "https://jwtauthbackend.onrender.com/user"


const userData = async () => {


    try {
        const response = await fetch("https://jwtauthbackend.onrender.com/user", {
            method: "GET",
            credentials: "include"
        });
        const data = await response.json()
        console.log(data)
        // console.log(data.Detail.name)
        if (data.message === "Login Again") {
            window.location.href = "https://jwtauthbackend.onrender.com/login.html"
        }

        if (response.ok) {
            document.getElementById("username").innerText = `@${data.Detail.userName}`
            document.getElementById("name").innerText = data.Detail.name
            document.getElementById("email").innerText = data.Detail.email
            document.getElementById("bio").innerText = data.Detail.bio
        }
    }
    catch (e) {
        console.log(e)
    }
}

userData()

document.getElementById("logout").addEventListener("click", async () => {
    try {
        const res = await fetch("https://jwtauthbackend.onrender.com/logout")
        if (res.ok) {
            window.location.href = "https://jwtauthbackend.onrender.com"
        }
    }
    catch (e) {
        console.log(e.message)
    }
})