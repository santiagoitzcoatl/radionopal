import React, { useState } from 'react';
import Play from './Play';
import Pause from './Pause';
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
    <div className="Player">
      <audio id="audio-player" type="audio/mpeg">
        <source src={process.env.REACT_APP_STREAM_URL} />
      </audio>
      {playing ? (
        <Pause onPlayerClick={handlePlayerClick} />
      ) : (
        <Play onPlayerClick={handlePlayerClick} />
      )}
    </div>
  );
};

export default Player;
