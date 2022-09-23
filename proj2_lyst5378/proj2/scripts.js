const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var Color = getBGcolor(orange);

// orange.addEventListener("mouseenter", () => {
//     center.style.background = tColor;
// });

const ColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });

};

ColorChanger(red, getBGcolor(red));
ColorChanger(cyan, getBGcolor(cyan));
ColorChanger(violet, getBGcolor(violet));
ColorChanger(orange, getBGcolor(orange));
ColorChanger(pink, getBGcolor(pink));
