    document.addEventListener('DOMContentLoaded', () => {

    const modalOverlay = document.getElementById('edit-profile-modal');
    const btnEditProfileTrigger = document.getElementById('btn-edit-profile-trigger');
    const btnModalClose = document.getElementById('btn-modal-close');
    const btnModalCancel = document.getElementById('btn-modal-cancel');
    const btnEditAvatar = document.getElementById('btn-edit-avatar');


    const editForm = document.getElementById('edit-profile-form');
    const inputFullName = document.getElementById('input-fullName');
    const inputDob = document.getElementById('input-dob');
    const inputGender = document.getElementById('input-gender');
    const inputBloodGroup = document.getElementById('input-bloodGroup');


    const displayNameLeft = document.getElementById('display-name-left');
    const displayFullName = document.getElementById('display-full-name');
    const displayDob = document.getElementById('display-dob');
    const displayGender = document.getElementById('display-gender');
    const displayBloodGroup = document.getElementById('display-blood-group');
    const profilToast = document.getElementById('profil-toast');

    let toastTimeout = null;


    if (btnEditProfileTrigger && modalOverlay) {
        btnEditProfileTrigger.addEventListener('click', () => {

            inputFullName.value = displayFullName.textContent.trim();
            inputDob.value = displayDob.textContent.trim();
            inputGender.value = displayGender.textContent.trim();
            inputBloodGroup.value = displayBloodGroup.textContent.trim();


            modalOverlay.classList.add('active');
            inputFullName.focus();
        });
    }


    const closeModal = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    };

    if (btnModalClose) btnModalClose.addEventListener('click', closeModal);
    if (btnModalCancel) btnModalCancel.addEventListener('click', closeModal);


    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Edit Profile Form Submission Handler
    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullNameVal = inputFullName.value.trim();
            const dobVal = inputDob.value.trim();
            const genderVal = inputGender.value;
            const bloodVal = inputBloodGroup.value;


            if (!fullNameVal || !dobVal || !genderVal || !bloodVal) {
                alert('Selakan lengkapi semua kolom profil sebelum menyimpan.');
                return;
            }


            if (displayNameLeft) displayNameLeft.textContent = fullNameVal;
            if (displayFullName) displayFullName.textContent = fullNameVal;
            if (displayDob) displayDob.textContent = dobVal;
            if (displayGender) displayGender.textContent = genderVal;
            if (displayBloodGroup) displayBloodGroup.textContent = bloodVal;


            closeModal();


            triggerSuccessToast();
        });
    }

    const triggerSuccessToast = () => {
        if (profilToast) {
            // Reset existing timeout if active
            if (toastTimeout) {
                clearTimeout(toastTimeout);
                profilToast.classList.remove('show');
                void profilToast.offsetWidth;

            }

            // Show Toast
            profilToast.classList.add('show');

            // Hide Toast after 3 seconds
            toastTimeout = setTimeout(() => {
                profilToast.classList.remove('show');
                toastTimeout = null;
            }, 3000);
        }
    };


    if (btnEditAvatar) {
        btnEditAvatar.addEventListener('click', () => {
            alert('Fitur mengganti foto profil sedang dikembangkan secara aman. Tetap siaga!');
        });
    }
});
