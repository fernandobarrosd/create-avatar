import html2canvas from "html2canvas";
import { database } from "./database";

export function createAvatarItem({
    id,
    headColor,
    bodyColor,
    foregroundColor
}) {
    const $avatarItemContainer = document.createElement("li");
    const $avatarItem = document.createElement("div");
    const $avatarHead = document.createElement("div");
    const $avatarBody = document.createElement("div");
    const $btnSaveAvatar = document.createElement("button");
    const $btnDeleteAvatar = document.createElement("button");
    const $buttonsContainer = document.createElement("div");


    $buttonsContainer.className = "buttons";
    

    $avatarItemContainer.className = "avatar-item-container";
    $avatarItemContainer.dataset.id = id;
    
    $avatarItem.className = "avatar-item";
    $avatarItem.style.backgroundColor = foregroundColor;


    $avatarHead.className = "avatar-head";
    $avatarHead.style.backgroundColor = headColor;


    $avatarBody.className = "avatar-body";
    $avatarBody.style.backgroundColor = bodyColor;

    $btnSaveAvatar.id = "btn-save-avatar";
    $btnSaveAvatar.textContent = "Save";
    $btnSaveAvatar.className = "button";

    $btnSaveAvatar.addEventListener("click", async () => {
        const $canvas = await html2canvas($avatarItem);
        const $avatarImageLink = document.createElement("a");
        const url = $canvas.toDataURL();

        $avatarImageLink.href = url;
        $avatarImageLink.target = "_blank";
        $avatarImageLink.download = `avatar-${id}`;
        $avatarImageLink.click();
        
    });

    $btnDeleteAvatar.innerHTML = `
        <i class="bi bi-trash"></i>
    `;

    $btnDeleteAvatar.id = "btn-delete-avatar";
    $btnDeleteAvatar.className = "button";

    $btnDeleteAvatar.addEventListener("click", () => {
        database.deleteAvatar(id);
        $avatarItemContainer.remove();
    });
    

    $avatarItem.appendChild($avatarHead);
    $avatarItem.appendChild($avatarBody);

    $buttonsContainer.appendChild($btnSaveAvatar);
    $buttonsContainer.appendChild($btnDeleteAvatar);
    

    $avatarItemContainer.appendChild($avatarItem);
    $avatarItemContainer.appendChild($buttonsContainer);

    return $avatarItemContainer;
}