$(document).foundation()


const anchors = document.querySelectorAll('a');

for( i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener ('mouseover', (target) => {
        event.target.style.transform = 'scale(1.07)';
        event.target.style.fontSize = '15px';
    })
    anchors[i].addEventListener ('mouseout', (target) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.fontSize = '13px';
    })
}