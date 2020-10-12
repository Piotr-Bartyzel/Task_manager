let workers = ['Adam Nowak', 'Michał Potoczek', 'Antoni Worek'];
let validationStatus = [0, 0, 0, 0];
let tasks = [];
let taskId = 0;

$(document).ready(function () {

    $('.dropdownContent').hide();
    $(window).click(function () {
        $('.dropdownContent').hide();
    });

    $(".dropbtn").on("click", function (event) {
        event.stopPropagation();
        $(".dropdownContent").fadeTo(
            "fast", 1, function () {
                $('.dropdownContent').show();
            });
    });

    createWorkers();
})

setLabel = (event) => {
    if (!event) {
        $("label[for='" + $('.dropbtn').attr('name') + "']").css('display', '');
        return;
    }
    event.value !== '' ? $("label[for='" + $(event).attr('name') + "']").css('display', '') :
        $("label[for='" + $(event).attr('name') + "']").css('display', 'none');
}

setStyle = () => {
    $(event).css('color', '#00447C');
    $($(event).children()[2]).css('display', '');
    $('.checked').css('display', 'none');
    $('#worker').css('color', '#333333');
}

