
async function getData() {
    try {
        const apiUrl = "http://localhost:3000/"
        const res = await fetch("http://localhost:3000/",
            {
                method: "GET",
                body: JSON.stringify(getData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        return await res.json()
    } catch (error) {
        console.log("error")
    }
};

console.log(getData())


