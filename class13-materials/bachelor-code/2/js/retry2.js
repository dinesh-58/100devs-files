// select photo elements
const andi = document.querySelector('#andi');
const claire = document.querySelector('#claire');
const sharleen = document.querySelector('#sharleen');
// onclick, pass element to hide function

andi.onclick = function() {show('andi');};
claire.onclick = function() {show('claire');};
sharleen.onclick = function() {show('sharleen');};
// hide function. add to other two. toggle for passed

function show(bachelorette) {
    const contestants = ['andi', 'claire', 'sharleen'];    
    for(let i of contestants ) {
        let contestantPhoto = document.querySelector(`#${i}Next`);
        i == bachelorette ? contestantPhoto.classList.toggle('hidden') : contestantPhoto.classList.add('hidden');
    }
}