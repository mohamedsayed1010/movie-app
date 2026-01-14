import React from 'react';
import { Watch } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(1900,35,35,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color='#ff3700'
        ariaLabel="watch-loading"
      />
    </div>
  );
}
