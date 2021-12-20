const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const rePasswordInput = document.querySelector('#re-password');
console.log(rePasswordInput);
const listInput = document.querySelectorAll('.login-form .right-panel .input input');
const signInButton = document.querySelector('#SignIn-button');

signInButton.onclick = (e) => {
    e.preventDefault();
    let filter = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!filter.test(emailInput.value)) {
        const errorMessage = document.querySelector('#email + .error-message');
        errorMessage.textContent = 'Email không chính xác';
        emailInput.focus();
    } else if (passwordInput.value !== rePasswordInput.value) {
        const errorMessage = document.querySelector('#re-password + .error-message');
        errorMessage.textContent = 'Mật khẩu không khớp';
        rePasswordInput.focus();
    } else {
        window.location = 'http://127.0.0.1:5500/index.html';
    }
};
