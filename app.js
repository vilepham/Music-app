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

    //const visuals, colors

    //event listener pads for each pad, index
    //reset current time .currentTime = 0
    //on click sounds play
    //call create bubbles


    //array colors
    //function that makes bubbles (index)
        //create element => visual append child
        //colors
        //animation
        //bubble remove itself after animation ends

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].play();
            sounds[index].currentTime = 0;

            createBubbles(index);
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
    //.className .classList .style.height
});

