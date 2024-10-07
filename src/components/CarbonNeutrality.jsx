import React from 'react';
import Navbar from './Navbar'; // Adjust the path if necessary

const CarbonNeutrality = () => {
  return (
    <div style={styles.container}>
      <Navbar /> {/* Include the Navbar component */}

      <section style={styles.mainSection}>
        <h2 style={styles.mainHeading}>CARBON NEUTRALITY</h2>
        <p style={styles.mainParagraph}>
          To tackle climate change, the Indian mining industry must act urgently. With global warming likely to exceed 1.5°C by 2050, reducing emissions alone is insufficient. The industry needs to adopt advanced technologies for carbon capture, shift to renewable energy, and enhance energy efficiency. Additionally, restoring ecosystems to absorb CO2 is crucial. These steps are essential for achieving a "Net Zero" future and mitigating climate impacts.
        </p>
        <a href="/measure-carbon-footprint" style={styles.ctaLink}>
          What is Your Carbon Footprint? Business or Personal – Measure it Now
        </a>
      </section>

      <section style={styles.subSection}>
        <h3 style={styles.subHeading}>Different types of Carbon Removal Projects</h3>
        <p style={styles.subParagraph}>
          For reducing carbon emissions specifically in the mining sector, the following carbon removal projects can be particularly beneficial:
        </p>
        <ul style={styles.list}>
          <li>Afforestation and Reforestation</li>
          <li>Grassland Restoration</li>
          <li>Biochar</li>
          <li>BECCS (Biomass Energy Carbon Capture and Storage)</li>
          <li>CCS (Carbon Capture and Storage)</li>
        </ul>
        <p style={styles.subParagraph}>
          Each of these methods offers different benefits and challenges, so a combination of approaches tailored to specific mining contexts may be the most effective strategy.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  mainSection: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  mainHeading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  mainParagraph: {
    fontSize: '18px',
    marginBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaLink: {
    display: 'inline-block',
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '20px',
    fontSize: '18px',
  },
  subSection: {
    padding: '30px 20px',
    backgroundColor: '#E0F7FA',
    marginTop: '30px',
  },
  subHeading: {
    fontSize: '28px',
    marginBottom: '15px',
  },
  subParagraph: {
    fontSize: '16px',
    marginBottom: '15px',
  },
  list: {
    fontSize: '16px',
    marginBottom: '15px',
    paddingLeft: '20px',
  },
};

export default CarbonNeutrality;
