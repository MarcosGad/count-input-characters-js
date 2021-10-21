let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let maxLenght = input.getAttribute('maxlength');
let div = document.querySelector("div");

count.innerHTML = maxLenght;

input.oninput = function () {
    count.innerHTML = maxLenght - this.value.length;
    count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
    //progress
    progress.style.width = `${(this.value.length * 100) / maxLenght}%`;
}

