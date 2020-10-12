deleteRow = (id) => {
    $('.taskBorder').remove();
    tasks = tasks.filter((task) => task.id !== id)
    taskId--;
    buildTasks(2);
    setAmount();
}

sortBy = (topic) => {
    $(".taskBorder").each(function () {
        $(this).remove();
    })

    switch (topic) {
        case 1: {
            tasks = tasks.sort((task1, task2) => (task1.taskName > task2.taskName) ? 1 : -1)
        }
            break;
        case 2: {
            tasks = tasks.sort((task1, task2) => (task1.cost > task2.cost) ? 1 : -1)
        }
            break;
        default: {
            tasks = tasks.sort((task1, task2) => (task1.euroCost > task2.euroCost) ? 1 : -1)
        }
    }
    buildTasks(2);
}

buildTasks = (option) => {
    if (option === 1) {
        rebuildTasks(tasks[tasks.length - 1]);
    } else {
        tasks.forEach(task => {
            rebuildTasks(task);
        })
    }
}

rebuildTasks = (task) => {
    $("#taskTable").append('<tr class="taskBorder"><td>' + task.taskName + '</td><td>' + task.cost + '</td><td>'
        + task.euroCost + '</td><td onclick="deleteRow(' + task.id + ')" class="delete"><img src="assets/Union.png" alt="union"><div>Usuń</div></td></tr>');
}

setAmount = () => {
    let plnAmount = 0;
    let euAmount = 0;
    tasks.forEach(task => {
        plnAmount += parseInt(task.cost);
        euAmount += parseInt(task.euroCost);
    })

    $("#amount").text('Suma: ' + plnAmount + ' PLN (' + euAmount + ' Euro)');
}

addTask = () => {
    let taskName = $('#taskName').val();
    let cost = $('#cost').val();
    if (validationFields()) {
        tasks[taskId] = {
            id: taskId,
            taskName: taskName,
            cost: getFloorPln(cost),
            euroCost: getEurCost(cost)
        }
        buildTasks(1);
        taskId++;
        clearInputValue();
        setAmount();
    }
}

getEurCost = (cost) => {
    return parseFloat((cost / 4.8282).toFixed(2));
}

getFloorPln = (cost) => {
    return parseFloat((cost / 1.0).toFixed(2));
}

clearInputValue = () => {
    $('#taskName').val('');
    $('#cost').val('');
    $('label').css('display', 'none');
    $('.firstInput').removeClass('error');
    $('.errorMessage').css('display', 'none');
}
