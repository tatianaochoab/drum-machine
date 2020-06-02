import React from 'react';



let DrumPad = ({ handlerKeys, handlerClick, sounds }) => {
    let latinSounds = [];

    if (sounds.latinSounds == null) {

    } else {
        latinSounds = Object.values(sounds.latinSounds);

    }



    return (

        <article id='drum-machine' className='drum-pad-all' onKeyPress={handlerKeys}>{
            latinSounds.map((latinSound) => {
                return (<button id={latinSound.id} className='drum-pad btn  btn-outline-warning' onClick={handlerClick} key={latinSound.id}>{latinSound.letter.toUpperCase()}
                    <audio src={latinSound.src} id={latinSound.letter.toUpperCase()} className='clip'></audio>
                </button>)
            })}
        </article>
    )
}

export default DrumPad;