
// const setTaskList = async function () {
//     const taskList = document.getElementById("taskList")
//     const data = await getData();
//     data.forEach(task => {
//         const li = document.createElement("li", class { "icon" });
//         const liContent = document.createTextNode(`${task.description}`);
//         li.appendChild(liContent);
//         taskList.append(li);
//     });
// };

const setTaskList = async function () {
    const taskList = document.getElementById("taskList")
    const data = await getData();
    data.forEach(task => {
        const li = document.createElement("li", class { "li" });
        const liContent = document.createTextNode(`${task.description}`);
        const icon = document.createElement("i", class { "icon" })
        li.classList.add(`${task.id}`);
        li.appendChild(liContent);
        li.appendChild(icon);
        taskList.append(li)
    });
};

function addTask() {
    const data = { description: document.getElementById("task").value, done: false };
    fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    window.location.reload(false);
}
document.getElementById("add__btn").addEventListener("click", addTask)


setTaskList()



// const deleteTask = async function () {
//     document.getElementsByClassName("icon").addEventListener("click", async e => {
//         if (e.target.classList.value === "trashcan") {
//             console.log(e.target.parentElement.id);
//             await deleteData(e.target.parentElement.id);
//             addApiDataToDom();
//         }
//     });
// };

// deleteTask();







///detelen


function deleteTask() {
    const data = { description: document.getElementById("task").value, done: false };
    fetch("http://localhost:3000/", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    window.location.reload(false);
}

document.getElementsByClassName("icon").addEventListener("click", deleteTask)


// const deleteTask = () => {
//     const e = document.getElementsByClassName("icon")
//     e.parentElement.remove();
// };

// deleteTask()

// async function deleteTask() {
//     const taskList = document.getElementById("taskList")
//     const data = await getData();

//     data.splice(task, 1)

//     var item = `${task.id}`  ;


//     document.getElementsByClassName("icon").addEventListener("click", deleteTask)
