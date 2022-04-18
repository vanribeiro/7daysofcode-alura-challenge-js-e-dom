const formBirthDayPerson = document.querySelector('.js-form');
const inputName = formBirthDayPerson.querySelector('.js-field__name');
const inputBirthDate = formBirthDayPerson.querySelector('.js-field__birth-date');

const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log({ name: inputName.value, birthDate: inputBirthDate.value});
    formBirthDayPerson.reset();
}

formBirthDayPerson.addEventListener('submit', handleSubmitForm)