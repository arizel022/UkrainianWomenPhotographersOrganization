(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
})();

window.onscroll = function showHeader() {
    const header = document.querySelector('.header')

    if (window.scrollY > 200) {
        header.classList.add('fixed')

    } else {
        header.classList.remove('fixed')
    }
}

// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");

//     menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//         mobileMenuRef.classList.toggle("is-open");
//     });
// })();