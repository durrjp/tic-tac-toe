const contentTarget = document.querySelector(".container")

export const Boxes = () => {
    contentTarget.innerHTML = `
        <div class="square" id="1"></div>
        <div class="square" id="2"></div>
        <div class="square" id="3"></div>
        <div class="square" id="4"></div>
        <div class="square" id="5"></div>
        <div class="square" id="6"></div>
        <div class="square" id="7"></div>
        <div class="square" id="8"></div>
        <div class="square" id="9"></div>
    `
}