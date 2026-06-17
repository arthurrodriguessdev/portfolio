document.addEventListener("DOMContentLoaded", () => {
    const icone_menu_mobile = document.getElementById("icone-menu");
    const menu_mobile = document.querySelector(".menu-mobile");

    icone_menu_mobile.addEventListener("click", (e) => {
        e.stopPropagation();
        menu_mobile.classList.toggle("ativo");
    });

    document.addEventListener("click", () => {
        menu_mobile.classList.remove("ativo");
    });
});