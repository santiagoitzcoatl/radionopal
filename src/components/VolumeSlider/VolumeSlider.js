import React, { useContext } from 'react';
import { FaVolumeUp } from 'react-icons/fa';
import { store } from '../../store.js';
import './VolumeSlider.scss';

const VolumeSlider = () => {
  const { state, dispatch } = useContext(store);
  const { volume } = state;

  return (
    <>
      <FaVolumeUp size="1.5em" className="mr-2 float-left hidden md:block" />
      <input
        className="header__volume-slider mt-1 hidden md:block"
        type="range"
        min={0.0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(event) => {
          document.getElementById('audio-player').volume = volume;
          dispatch({ type: 'volume', payload: event.target.value });
        }}
      />
    </>
  );
};

export default VolumeSlider;
