import React from 'react';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <>
    <div>
      <Navbar />
      <div style={{
        background: "url('../public/world212121.svg') no-repeat center center/contain",
        height: '100vh',
        width: '110%',
        color: 'white',
        position: 'relative',
        marginTop: '20px'
      }}></div>

      <div style={{
        textAlign: 'left',
        position: 'absolute',
        top: '75%',
        left: '20%',
        transform: 'translate(-50%, -50%)'
      }}>
        <img src="/1 logo.svg" alt="Mine Eco Logo"/>
        <p style={{ fontSize: '24px' }}>
          Reduce carbon emissions by adopting greener solutions
        </p>
        <button style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#1DBF73',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '18px',
          borderRadius: '5px'
        }}>Explore</button>
      </div>
    </div>
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#e0f7df' }}>
        {/* Sidebar */}
        <div style={{
          width: '250px',
          backgroundColor: '#f8f8f8',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#000',
              color: '#fff',
              borderRadius: '8px 0 0 8px',
              marginBottom: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Overview</li>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px 0 0 8px',
              marginBottom: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Demography</li>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px 0 0 8px',
              marginBottom: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Divisions</li>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px 0 0 8px',
              marginBottom: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Districts</li>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px 0 0 8px',
              marginBottom: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Tehsils</li>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px 0 0 8px',
              marginBottom: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Blocks</li>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px 0 0 8px',
              marginBottom: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Gram Panchayat</li>
            <li style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px 0 0 8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Villages</li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2 style={{ color: '#34495e', marginBottom: '20px', fontSize: '24px' }}>
            Exploring India
          </h2>
          <h1 style={{ color: '#34495e', marginBottom: '40px', fontSize: '32px', fontWeight: 'bold' }}>
            Indian coal mines: a broader prospective
          </h1>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {/* Overview Section */}
            <div style={{
              width: '50%',
              padding: '40px'
            }}>
              <h2 style={{ color: '#34495e', fontSize: '24px', marginBottom: '20px' }}>Overview</h2>
              <p style={{ color: '#7f8c8d', fontSize: '16px', lineHeight: '1.6' }}>
                Coal in India has been mined since 1774, and India is the second largest producer and consumer of coal after China, mining 997.25 million metric tons in FY 2023. Around 30% of coal is imported. Due to demand, supply mismatch and poor quality with high ash content, India imports coking coal to meet the shortage of domestic supply. <a href="#" style={{ color: '#2980b9', textDecoration: 'none' }}>Dhanbad</a>, the largest coal producing city, has been called the coal capital of India. Most of the coal is burned to generate electricity but coal-powered plants and mines have been criticised for breaking environmental laws. The health and environmental impacts of coal production and energy generation are serious.
              </p>
              <a href="#" style={{
                color: '#2980b9',
                textDecoration: 'none',
                display: 'inline-block',
                marginTop: '20px',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>Read More →</a>
            </div>

            {/* Map Section */}
            <div style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src="./hi.jpg" alt="India Map" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
      <div >
         <h2 style={{ textAlign: 'center', color: 'rgba(0, 139, 249, 1)', marginBottom: '20px', fontSize: '24px' }}>
           Exploring India
         </h2>
         <h1 style={{ textAlign: 'center', color: 'rgba(28, 43, 120, 1)',ontWeight: 'bold' }}>
           Indian coal mines: a broader prospective
         </h1></div>
      <div style={{
          display: 'flex',
          flexdirection: 'row',
          flexwrap: 'wrap',
          padding: '20px',
          justifyContent: 'space-evenly',
          paddingTop: '40px'
      }}>
        <div style={{
         display: 'flex',
         flexdirection:'column',
         padding: '10px',
         width:'300px',
         height: '350px',
         cursor: 'pointer', 
         transition: 'transform 320ms ease-in-out',
         borderRadius: '10px' 
        }}>
          <img src='./h1.jpg' style={{height: '350px', width: '300px', borderRadius: '10px'}}/>
        </div>
        <div style={{
           display: 'flex',
           flexdirection:'column',
           padding: '10px',
           width:'300px',
           height: '350px',
           cursor: 'pointer', 
           transition: 'transform 320ms ease-in-out',
           borderRadius: '10px' 
          }}>
            <img src='./h2.jpg' style={{height: '350px', width: '300px', borderRadius: '10px'}}/>
          </div>
        <div style={{
           display: 'flex',
           flexdirection:'column',
           padding: '10px',
           width:'300px',
           height: '350px',
           cursor: 'pointer', 
           transition: 'transform 320ms ease-in-out',
           borderRadius: '10px' 
          }}>
            <img src='./h3.jpg' style={{height: '350px', width: '300px', borderRadius: '10px'}}/>
          </div>
        <div style={{
           display: 'flex',
           flexdirection:'column',
           padding: '10px',
           width:'300px',
           height: '350px',
           cursor: 'pointer', 
           transition: 'transform 320ms ease-in-out',
           borderRadius: '10px' 
          }}>
            <img src='./h4.jpg' style={{height: '350px', width: '300px', borderRadius: '10px'}}/>
          </div>
      </div>
    </>
    
  );
};

export default Homepage;
