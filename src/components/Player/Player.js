import React, { useState } from 'react';
import './Player.scss';

const Player = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayerClick = () => {
    if (!playing) {
      document.getElementById('audio-player').play();
      setPlaying(true);
    } else {
      document.getElementById('audio-player').pause();
      setPlaying(false);
    }
  };

  return (
    <button className={`player ${playing ? 'player--playing' : ''}`} onClick={handlePlayerClick}>
      <audio id="audio-player" type="audio/mpeg">
        <source src={process.env.REACT_APP_STREAM_URL} />
      </audio>
      <div className="player__border" />
      <svg />
    </button>
  );
};

export default Player;
