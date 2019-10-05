$(document).foundation()


const anchors = document.querySelectorAll('a');

for( i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener ('mouseover', (target) => {
        if (event.target.className !== 'button expanded') {
        event.target.style.transform = 'scale(1.07)';
        event.target.style.fontSize = '15px';
        } else {
            event.target.style.backgroundColor = 'grey';
        }
    })
    anchors[i].addEventListener ('mouseout', (target) => {
        if (event.target.className !== 'button expanded') {
            event.target.style.transform = 'scale(1)';
            event.target.style.fontSize = '13px';
            } else {
                event.target.style.backgroundColor = 'black';
            }
    })
    
}


