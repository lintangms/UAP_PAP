const form = document.getElementById('registerForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const fullNameWrapper = document.getElementById('fullNameWrapper');
const emailWrapper = document.getElementById('emailWrapper');
const passwordWrapper = document.getElementById('passwordWrapper');
const confirmPasswordWrapper = document.getElementById('confirmPasswordWrapper');

const passwordToggle = document.getElementById('passwordToggle');
const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');

const submitBtn = document.getElementById('submitBtn');

const toggleFocus = (input, wrapper) => {
    if (!input || !wrapper) return;
    input.addEventListener('focus', () => wrapper.classList.add('focus'));
    input.addEventListener('blur', () => wrapper.classList.remove('focus'));
};

toggleFocus(fullName, fullNameWrapper);
toggleFocus(email, emailWrapper);
toggleFocus(password, passwordWrapper);
toggleFocus(confirmPassword, confirmPasswordWrapper);

const setupPasswordToggle = (toggleBtn, passwordInput) => {
    if (!toggleBtn || !passwordInput) return;
    const eyeOn = toggleBtn.querySelector('.eye-icon-on');
    const eyeOff = toggleBtn.querySelector('.eye-icon-off');

    toggleBtn.addEventListener('click', () => {
        const isPass = passwordInput.type === 'password';
        passwordInput.type = isPass ? 'text' : 'password';
        eyeOn.style.display = isPass ? 'none' : 'block';
        eyeOff.style.display = isPass ? 'block' : 'none';
        passwordInput.focus();
    });
};

setupPasswordToggle(passwordToggle, password);
setupPasswordToggle(confirmPasswordToggle, confirmPassword);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullNameVal = fullName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;

    if (!fullNameVal || !emailVal || !passwordVal || !confirmPasswordVal) {
        alert('Silakan isi seluruh kolom yang tersedia.');
        return;
    }

    if (passwordVal !== confirmPasswordVal) {
        alert('Konfirmasi kata sandi tidak cocok dengan kata sandi.');
        return;
    }

    submitBtn.classList.add('loading');

    setTimeout(() => {
        submitBtn.classList.remove('loading');
        alert(`Berhasil Mendaftar!\nSelamat bergabung, ${fullNameVal}`);
        window.location.href = 'beranda.html';
    }, 1500);
});
