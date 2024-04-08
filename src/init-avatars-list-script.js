import { createAvatarItem } from "./create-avatar-item";
import { database } from "./database";
import { globalVariables } from "./globalVariables";

window.addEventListener("DOMContentLoaded", () => {
    const avatars = database.findAllAvatars();
    const { $avatarsList } = globalVariables;
    avatars.forEach(avatar => {
        const $avatarItem = createAvatarItem(avatar);
        $avatarsList.appendChild($avatarItem);
    });
});