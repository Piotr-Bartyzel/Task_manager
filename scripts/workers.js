showDropdown = () => {
    event.stopPropagation();
}

createWorkers = () => {
    $('label').css('display', 'none');
    $('.errorMessage').css('display', 'none');
    let numberOfPicture = 1;
    workers.forEach(worker => {
        $("#workerList").append('<div class="worker" onclick="setWorker(\''
            + worker + '\', this)"><img class="workerImg" src="assets/' + numberOfPicture + '.png" alt="workerImg"><div>' + worker +
            '</div><img src="assets/checked.png" class="checked" alt="checked"></div>');
        numberOfPicture++;
    })
    $('.checked').css('display', 'none');
}

filterWorkers = () => {
    let filterWord = $("#searchInput").val().toLocaleLowerCase();
    $('#workerList > div').each(function () {
        let worker = $(this).children('div').text().toLocaleLowerCase();
        let name = worker.split(" ");
        if (worker.includes(filterWord) && (worker[0] === filterWord[0] || name[1][0] === filterWord[0])) {
            $(this).css('display', '');
        } else {
            $(this).css('display', 'none');
        }
        if ($("#searchInput").val() === '') {
            $('#workerList > div').css('display', '');
        }
    });
}

setWorker = (worker, event) => {
    showDropdown();
    $('.dropbtn').val(worker);
    setStyle(event);
    setLabel();
}