let registerContainer = document.getElementById("registerContainer")
let loginContainer = document.getElementById("loginContainer")

let loginPageLink = document.getElementById("loginPageLink")
let registerPageLink = document.getElementById("registerPageLink")

loginPageLink.addEventListener("click", () => {
    registerContainer.style.display = "none"
    loginContainer.style.display = "block"
})

registerPageLink.addEventListener("click", () => {
    registerContainer.style.display = "block"
    loginContainer.style.display = "none"
})


const baseURL = 'http://localhost:4009';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            document.getElementById('loginError').textContent = '';
            alert('Login successful!');
        } else {
            const data = await response.json();
            document.getElementById('loginError').textContent = data.error;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});