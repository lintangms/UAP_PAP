const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailWrapper = document.getElementById('emailWrapper');
const passwordWrapper = document.getElementById('passwordWrapper');
const passwordToggle = document.getElementById('passwordToggle');
const eyeOn = document.querySelector('.eye-icon-on');
const eyeOff = document.querySelector('.eye-icon-off');
const submitBtn = document.getElementById('submitBtn');

const toggleFocus = (input, wrapper) => {
    input.addEventListener('focus', () => wrapper.classList.add('focus'));
    input.addEventListener('blur', () => wrapper.classList.remove('focus'));
};

toggleFocus(email, emailWrapper);
toggleFocus(password, passwordWrapper);

passwordToggle.addEventListener('click', () => {
    const isPass = password.type === 'password';
    password.type = isPass ? 'text' : 'password';
    eyeOn.style.display = isPass ? 'none' : 'block';
    eyeOff.style.display = isPass ? 'block' : 'none';
    password.focus();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailVal = email.value.trim();
    const passwordVal = password.value;

    if (!emailVal || !passwordVal) {
        alert('Silakan isi seluruh kolom yang tersedia.');
        return;
    }

    submitBtn.classList.add('loading');

    setTimeout(() => {
        submitBtn.classList.remove('loading');
        alert(`Berhasil Masuk!\nSelamat datang kembali, ${emailVal}`);
        form.reset();
        eyeOn.style.display = 'block';
        eyeOff.style.display = 'none';
    }, 1500);
});
