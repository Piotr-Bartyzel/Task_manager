validationFields = () => {
    let validate = 1;
    setValidationStatus();
    validationStatus.forEach((status, index) => {
        validate *= status;
        showErrors(status, index);
    })
    return validate;
}

setValidationStatus = () => {
    $('#companyName').val().length > 0 ? validationStatus[0] = 1 : validationStatus[0] = 0;
    $('#worker').val() !== 'Pracownik' ? validationStatus[1] = 1 : validationStatus[1] = 0;
    $('#taskName').val().length > 0 ? validationStatus[2] = 1 : validationStatus[2] = 0;
    ($('#cost').val().length > 0 && $.isNumeric($('#cost').val())) ? validationStatus[3] = 1 : validationStatus[3] = 0;
}

showErrors = (status, index) => {
    if (status === 0) {
        $('.firstInput').eq(index).addClass('error');
        $('.errorMessage').eq(index).css('display', '');
    } else {
        $('.firstInput').eq(index).removeClass('error');
        $('.errorMessage').eq(index).css('display', 'none');
    }
}