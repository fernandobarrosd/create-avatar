import { createAvatarItem } from "./create-avatar-item";
import { database } from "./database";
import { globalVariables } from "./globalVariables";

const $btnShowCreateAvatarModal = document.querySelector("#btn-show-create-avatar-modal");
const $createAvatarModalWrapper = document.querySelector(".create-avatar-modal-wrapper");
const { $avatarsList } = globalVariables;
const $createAvatarForm = document.forms[0];

$btnShowCreateAvatarModal.addEventListener("click", () => {
    $createAvatarModalWrapper.id = "visible";
});

$createAvatarForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData($createAvatarForm);
    const headColor = formData.get("head-color");
    const bodyColor = formData.get("body-color");
    const foregroundColor = formData.get("foreground-color");

    if (headColor && bodyColor && foregroundColor) {
        const avatar = database.saveAvatar({
            headColor,
            bodyColor,
            foregroundColor
        });

        const $avatarItem = createAvatarItem(avatar);

        $avatarsList.appendChild($avatarItem);

        $createAvatarModalWrapper.id = "";


        
    }

    
});