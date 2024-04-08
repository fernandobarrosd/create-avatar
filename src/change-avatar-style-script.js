const $avatar = document.querySelector(".create-avatar-container .avatar-item");
const $inputRadios = document.querySelectorAll("input[type='radio']");
const [ $avatarHead, $avatarBody ] = Array.from($avatar.children);

const changeAvatarColorActions = {
    "head-color": updateAvatarHeadColor,
    "body-color": updateAvatarBodyColor,
    "foreground-color": updateAvatarForegroundColor
};

function updateAvatarHeadColor(color) {
    $avatarHead.style.backgroundColor = color;
}

function updateAvatarBodyColor(color) {
    $avatarBody.style.backgroundColor = color;
}

function updateAvatarForegroundColor(color) {
    $avatar.style.backgroundColor = color;
}



$inputRadios.forEach($inputRadio => {
    $inputRadio.addEventListener("input", ({ target }) => {
        if (target instanceof HTMLInputElement) {
            const bgColor = target.value;
            const changeColor = changeAvatarColorActions[target.name];
            changeColor(bgColor);
        }
    });
});