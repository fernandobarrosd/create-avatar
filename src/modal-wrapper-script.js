const modalWrappers = document.querySelectorAll(".modal-wrapper");

modalWrappers.forEach(modalWrapper => {
    modalWrapper.addEventListener("click", ({ target }) => {
        if (target instanceof HTMLDivElement) {
            target.id = "";
        }
    });
});