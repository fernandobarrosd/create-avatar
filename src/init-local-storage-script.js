window.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("avatars")) {
        localStorage.setItem("avatars", JSON.stringify([]));
    }
});