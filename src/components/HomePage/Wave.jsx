import React from 'react';
import wave from './resources/VectorWave.svg';

const Wave = () => {
    return (
        <>
        <div className= 'z-0 absolute w-full -mt-52 sm:-mt-56 md:-mt-60 lg:-mt-72 '>
            <img src={wave} alt=''></img>
        </div>
        </>
    )
}
export default Wave;