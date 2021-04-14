
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
        li.id = `${task.id}`;
        const liContent = document.createTextNode(`${task.description}`);
        const icon = document.createElement("i");
        icon.id = `${task.id}`;
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



///detelen


function deleteTask() {
    const data = { description: document.getElementById("task").value, done: false };
    task_id = task.id;
    fetch("http://localhost:3000/" + task.id, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    window.location.reload(false);
};

document.getElementById("task_id").addEventListener("click", deleteTask);




