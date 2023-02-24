// select three elements
const claire = document.querySelector('#claire');
const andi = document.querySelector('#andi');
const sharleen = document.querySelector('#sharleen');

// onlcik
document.querySelector('#andiNext').addEventListener("click", andiNext);
document.querySelector('#claireNext').addEventListener("click", claireNext);
document.querySelector('#sharleenNext').addEventListener("click", sharleenNext);
document.querySelector('#show').addEventListener("click",show);

function andiNext() {
    claire.classList.add('hidden');
    sharleen.classList.add('hidden');
    andi.classList.toggle('hidden');
}

function sharleenNext() {
    claire.classList.add('hidden');
    andi.classList.add('hidden');
    sharleen.classList.toggle('hidden');
}
function claireNext() {
    claire.classList.toggle('hidden');
    andi.classList.add('hidden');
    sharleen.classList.add('hidden');
}
function show() {
    claire.classList.remove('hidden');
    andi.classList.remove('hidden');
    sharleen.classList.remove('hidden');
}






// ? next retry by having just 1 hide function. pass const to not hide