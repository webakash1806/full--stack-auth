const apiEndpoint = "http://localhost:5001/user"

async function fetchData() {
    try {
        const response = await fetch(apiEndpoint)
        const data = await response.json()
        console.log(data)
    }
    catch (e) {
        console.log(e.message)
    }
}

fetchData()