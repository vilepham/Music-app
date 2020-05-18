window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visuals = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#6860d3',
        '#52d3fa'
    ]

    //Enable sounds with each click on pads
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].play();
            sounds[index].currentTime = 0;
            
            //Create bubbles with click
            createBubbles(index);
            //Declare here because index is a local variable inside this function
        });
    });

    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visuals.removeChild(bubble);
        });
    };
});

