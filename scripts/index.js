let content = document.querySelector('.content');
let popup = document.querySelector('.popup');
let popupContent = popup.querySelector('.popup__content');
let openPopupBtn = content.querySelector('#open_popup-btn');
let closePopupBtn = popup.querySelector('#close_popup-btn');
let savePopupBtn = popup.querySelector('#save_popup-btn');
let likeBtns = document.querySelectorAll('.card__btn-like');
let name = popup.querySelector('.popup__text_type_name');
let job = popup.querySelector('.popup__text_type_job');

let profileName = content.querySelector('.profile-info__title');
let profileJob = content.querySelector('.profile-info__job');


function openPopup() {
    popup.classList.add('popup_visible');
    name.value = profileName.textContent;
    job.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_visible');
}
// popupOverlay.addEventListener('click', closePopup);
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);

savePopupBtn.addEventListener('click', function () {
    closePopup();
    addProfile();
});



function addProfile() {
    profileName.textContent = name.value;
    profileJob.textContent = job.value;
}
popupContent.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        savePopupBtn.click();
    }
});

for (let i = 0; i < likeBtns.length; i+=1){
    let currentLikeBtn = likeBtns[i];
    currentLikeBtn.addEventListener('click', function (){
        likeBtns[i].classList.add('card__btn-like_active');
    });
}