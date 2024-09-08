// The querySelector() method returns the first element that matches a CSS selector.
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');
const popupButton = document.querySelector('.login_button');
const iconClose = document.querySelector('.icon_close');


// when u click on the register button, register for will be displayed
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

popupButton.addEventListener('click', ()=> {
    wrapper.classList.add('active_popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active_popup');
});