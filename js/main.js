const formBirthDayPerson = document.querySelector('.js-form');
const inputName = formBirthDayPerson.querySelector('.js-field__name');
const inputBirthDate = formBirthDayPerson.querySelector('.js-field__birth-date');

const validateInputName = (event) => {
    event.preventDefault();
    const messageListContainer = formBirthDayPerson.querySelector('.js-form__error--name');
    const isNotPattern = inputName.validity.patternMismatch;
    const isTooShortName = inputName.validity.tooShort;
    const isTooLongName = inputName.validity.tooLong;
    const errorMessageItem = `<li>${inputName.validationMessage}</li>`;

    if(isNotPattern) {
        inputName.setCustomValidity('o nome deve conter apenas letras');
        messageListContainer.innerHTML = errorMessageItem;
    } else if(isTooShortName){
        inputName.setCustomValidity('o nome deve ter 03 ou mais letras');
        messageListContainer.innerHTML = errorMessageItem;
        return true;
    } else {
        inputName.setCustomValidity('');
        messageListContainer.innerHTML = '';
        return true;
    }

    return false;
}

inputName.addEventListener('blur', validateInputName);
inputName.addEventListener('invalid', (event) => event.preventDefault());
inputBirthDate.addEventListener('invalid', (event) => event.preventDefault());


const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log({ name: inputName.value, birthDate: inputBirthDate.value});
    formBirthDayPerson.reset();
}

formBirthDayPerson.addEventListener('submit', handleSubmitForm)