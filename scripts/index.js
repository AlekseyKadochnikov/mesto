let popup = document.querySelector('.popup');
let content = document.querySelector('.content')
let openPopupBtn = content.querySelector('.form__edit-btn');
let closePopupBtn = popup.querySelector('.form__close-btn');
let savePopupBtn = popup.querySelector('.form__submit-btn_action_save');
let popupOverlay = popup.querySelector('.popup__overlay');

function openPopup() {
    popup.classList.add('popup__visible');
}

function closePopup() {
    popup.classList.remove('popup__visible');
}

openPopupBtn.addEventListener('click', function() {
    openPopup();
});


closePopupBtn.addEventListener('click', function (){
    closePopup();
});
popupOverlay.addEventListener('click', function () {
    closePopup();
});

savePopupBtn.addEventListener('click', function () {
    closePopup();
});

document.querySelector('.popup').addEventListener('keyup', function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.querySelector(".form__submit-btn_action_save").click();
        }
});

function addProfile() {
    let name = document.querySelector('.input__text_type_name');
    let job = document.querySelector('.input__text_type_job');

    let profileName = document.querySelector('.text_type_name');
    let profileJob = document.querySelector('.text_type_job');

profileName.textContent = name.value;
profileJob.textContent = job.value;
}

savePopupBtn.addEventListener('click', addProfile);
