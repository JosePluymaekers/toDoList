const apiUrl = "http://localhost:3000/"


//get data from database
async function getData() {
    try {
        const res = await fetch(apiUrl,
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


//post task to database
async function addTask() {
    try {
        const data = { description: document.getElementById("task").value, done: false };
        const res = await fetch("http://localhost:3000/", 
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            window.location.reload(false);
            return await res.json()
        
    } catch (error) {
            console.log("error")
    }     
    };


// delete task from database
async function deleteTask() {
    try {
        const task_id = this.id
        const data = { description: document.getElementById("task").value, done: false };
        await fetch("http://localhost:3000/" + task_id, 
            {
                method: "DELETE",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            window.location.reload(false);
            return await res.json()
        
    } catch (error) {
            console.log("error")
    }     
    };




