import React from 'react';
import { default as LoaderSpinner } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <div className="text-center w-full">
      <LoaderSpinner
        type="TailSpin"
        className="inline-block"
        color="#000000"
        height={50}
        width={50}
      />
    </div>
  );
};

export default Loader;
