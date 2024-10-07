import React from 'react';
import Navbar from './Navbar'; 

const CarbonSink = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.imageContainer}>
        <img src="/top.png" alt="Top Image" style={styles.image} />
        <img src="/bottom.png" alt="Bottom Image" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    display: 'block',
    width: '100%',
    margin: 0,
    padding: 0,
  },
};

export default CarbonSink;
