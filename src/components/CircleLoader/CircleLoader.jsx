import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <CircleLoader
      color="#670063"
      size={100}
      cssOverride={{
        margin: '30px auto',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    />
  );
};

export default Loader;
