// перемещение яндекс карт в зависимости от ширины экрана
const mobile = "mobile";
const desktop = "desktop";
const threshold = 1340;
let currentMode = window.innerWidth >= threshold ? desktop : mobile;
const mapContainer = document.querySelector(".contacts__map");
const text = document.querySelector(".contacts__text-container");
const contacts = document.querySelector(".contacts");

if (currentMode === mobile) text.after(mapContainer);

window.addEventListener("resize", function () {
    let currentWidth = this.window.innerWidth;

    if (currentWidth >= threshold && currentMode != desktop) {
        // console.log("changing mode to desktop");
        currentMode = desktop;
        contacts.prepend(mapContainer);
    }

    if (currentWidth < threshold && currentMode != mobile) {
        // console.log("changing mode to mobile");
        currentMode = mobile;
        text.after(mapContainer);
    }
});
