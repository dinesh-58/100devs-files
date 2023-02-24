// get input
document.querySelector('#check').onclick = function() {
    checkDay(getDay());
}

function getDay() {
    return document.querySelector('#day').value.toLowerCase();
}
// check input
function checkDay(day) {
    let result;
    switch(day) {
        case 'tuesday':
        case 'thursday':
            result = 'Class Day';
            break;
        case 'saturday':
        case 'sunday':
            result = 'Weekend';
            break;
        case 'wednesday':
            result = 'Hump Day';
            break;
        default: 
            result = 'Boring';
    }
    document.querySelector('#placeToSee').innerText = result;
} 

