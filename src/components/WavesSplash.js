import React from "react";
import "./WavesSplash.css";

function WavesSplash(props) {
  return (
    <div className='header'>
      {/* <!--Content before waves--> */}
      <div className='inner-header'>
        <h1>{props.title}</h1>
      </div>
      {/* <!--Waves Container--> */}
      <svg
        className='waves'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
        shapeRendering='auto'
      >
        <defs>
          <path
            id='gentle-wave'
            d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className='parallax'>
          <use
            xlinkHref='#gentle-wave'
            x='48'
            y='0'
            fill='rgba(132,86,236,0.7'
          />
          <use
            xlinkHref='#gentle-wave'
            x='48'
            y='3'
            fill='rgba(232,123,248,0.5)'
          />
          <use
            xlinkHref='#gentle-wave'
            x='48'
            y='5'
            fill='rgba(204,182,255,0.3)'
          />
          <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
        </g>
      </svg>
      {/* <!--Waves end--> */}
    </div>
  );
}

export default WavesSplash;
