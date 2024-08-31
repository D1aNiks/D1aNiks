// Переменные

const modalSettings = document.getElementById('modal-settings');
const modalNotify = document.getElementById('modal-notify');
const modalLanguage = document.getElementById('modal-language')

const btnSettings = document.getElementById('settings-btn');
const btnNotify = document.getElementById('notify-btn');

const btnNotifySound = document.getElementById('sound-btn');
const btnNotifyPush = document.getElementById('push-btn');
const btnLanguage = document.getElementById('language-btn');
const btnDark = document.getElementById('dark-btn');
const btnLight = document.getElementById('light-btn');
const btnSend = document.getElementById('send-btn');

const nowSound = document.getElementById('sound-now');
const nowPush = document.getElementById('push-now');
const nowLang = document.getElementById('lang-now');
const nowTheme = document.getElementById('theme-now');

const inpSend = document.getElementById('send-inp');
// Переменные

// Модальные окна Настройки / Уведомления

// Настройки

btnSettings.addEventListener('click', () => {

    if(btnSettings.classList.length == 2) {
        
        btnSettings.classList.remove('btn-img-select');
        modalSettings.classList.remove('open');

    }
    else {
        
        btnSettings.classList.add('btn-img-select');
        modalSettings.classList.add('open');

        btnNotify.classList.remove('btn-img-select');
        modalNotify.classList.remove('open');

    }

});

// Уведомления

btnNotify.addEventListener('click', () => {

    if(btnNotify.classList.length == 2) {
        
        btnNotify.classList.remove('btn-img-select');
        modalNotify.classList.remove('open');

    }
    else {
        
        btnNotify.classList.add('btn-img-select');
        modalNotify.classList.add('open');

        btnSettings.classList.remove('btn-img-select');
        modalSettings.classList.remove('open');

    }

});

// Язык

btnLanguage.addEventListener('click', () => {
    modalLanguage.classList.add('open');
});

// Отправка сообщения

btnSend.addEventListener('click', () => {
    location.reload();
});

// Модальные окна Настройки / Уведомления