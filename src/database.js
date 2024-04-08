export const database = {
    findAllAvatars() {
        const avatars = localStorage.getItem("avatars");
        return JSON.parse(avatars);
    },

    saveAvatar(avatarData) {
        const avatars = this.findAllAvatars();
        const avatar = { 
            id: crypto.randomUUID(),
            ...avatarData
        };

        avatars.push(avatar);

        localStorage.setItem("avatars", JSON.stringify(avatars));

        return avatar;

    },

    deleteAvatar(avatarID) {
        const avatars = this.findAllAvatars();
        const newAvatars = avatars.filter(avatar => avatar.id !== avatarID);
        localStorage.setItem("avatars", JSON.stringify(newAvatars));
    }
};