const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const listInput = document.querySelectorAll('.login-form .right-panel .input input');
const signInButton = document.querySelector('#SignIn-button');

signInButton.onclick = (e) => {
    e.preventDefault();
    if (emailInput.value !== 'abc@gmail.com') {
        const errorMessage = document.querySelector('#email + .error-message');
        errorMessage.textContent = 'Email không chính xác';
        emailInput.focus();
    } else if (passwordInput.value !== 'abcdef123456') {
        const errorMessage = document.querySelector('#password + .error-message');
        errorMessage.textContent = 'Mật khẩu không chính xác';
        passwordInput.focus();
    } else {
        location.href = '../../index.html';
    }
};
