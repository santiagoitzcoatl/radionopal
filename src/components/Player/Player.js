import React, { useContext } from 'react';
import { store } from '../../store.js';
import './Player.scss';

const Player = () => {
  const { state, dispatch } = useContext(store);
  const { playing } = state;

  const handlePlayerClick = () => {
    if (!playing) {
      document.getElementById('audio-player').play();
      dispatch({ type: 'playing', payload: true });
    } else {
      document.getElementById('audio-player').pause();
      dispatch({ type: 'playing', payload: false });
    }
  };

  return (
    <button className={`player ${playing ? 'player--playing' : ''}`} onClick={handlePlayerClick}>
      <div className="player__border" />
      <svg />
    </button>
  );
};

export default Player;
