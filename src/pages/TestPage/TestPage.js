import React from 'react';

function OverlappingContainers() {
  return (
    <div style={styles.mainContainer}>
      {/* Background container */}
      <div style={styles.backgroundContainer}>
        {/* Foreground container (overlapping) */}
        <div style={styles.foregroundContainer}></div>
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
  },
  backgroundContainer: {
    width: '400px', // Larger container width
    height: '250px', // Larger container height
    backgroundColor: '#4A90E2',
    borderRadius: '10px',
    position: 'relative', // Base for positioning the foreground
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  foregroundContainer: {
    width: '350px', // Smaller container width
    height: '200px', // Smaller container height
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    position: 'absolute',
    top: '20px', // Adjust to control the overlap
    left: '25px', // Center within the background
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default OverlappingContainers;