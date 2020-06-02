import React from 'react';

let Controls = ({ changeVolume, onOff, changeSound, name }) => {
    return (
        <section className='controls'>
            <article className='display-class'>
                <p id='display'></p>
            </article>
            <article className='power'>
                <button className='btn btn-outline-info power-btn' id='onOff' onClick={onOff}>Power Off</button>
            </article>
            <article className='power'>
                <button className='btn btn-outline-info power-btn' onClick={changeSound} id="buttonSound">{name}</button>
            </article>
            <article>
                <input className='volume' type='range' step='0.01' min='0' max='1' onChange={changeVolume} ></input>
            </article>
        </section>

    )
}

export default Controls;