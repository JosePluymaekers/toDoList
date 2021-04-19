//get task list from local api

const setTaskList = async function () {
    const taskList = document.getElementById("taskList")
    const data = await getData();    
    data.forEach(task => {
        const li = document.createElement("li", class { "li" });
        const liContent = document.createTextNode(`${task.description}`);
        const icon = document.createElement("i");
        const checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = `${task._id}`;
        icon.id = `${task._id}`;
        icon.addEventListener("click", deleteTask)
        li.appendChild(checkbox);
        li.appendChild(liContent);
        li.appendChild(icon);
        taskList.append(li)
    });
};

setTaskList()


//add task
document.getElementById("add__btn").addEventListener("click", addTask)





