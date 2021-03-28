let popup = document.querySelector('.popup');
let content = document.querySelector('.content')
let openPopupBtn = content.querySelector('.button_form_edit-btn');
let closePopupBtn = popup.querySelector('.button_form_close-btn');
let savePopupBtn = popup.querySelector('.button_action_save');
let popupOverlay = popup.querySelector('.popup__overlay');
let likeBtn = document.querySelector('.button_form_like');

function openPopup() {
    popup.classList.add('popup__visible');
}

function closePopup() {
    popup.classList.remove('popup__visible');
}

function likeActive() {
    likeBtn.classList.add('button_position_active');
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
            document.querySelector(".button_action_save").click();
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

likeBtn.addEventListener('click', likeActive);
