import React from 'react';

const AudioElement = () => (
  <audio id="audio-player" type="audio/mpeg">
    <source src={process.env.REACT_APP_STREAM_URL} />
  </audio>
);

export default AudioElement;
