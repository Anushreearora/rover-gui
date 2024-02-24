import React, { useState } from 'react';

const Cam1 = () => {

    const [selectedCamera, setSelectedCamera] = useState('comms');

    const handleCameraChange = (event) => {
        setSelectedCamera(event.target.value);
    };

    const getLink = () => {
        if (selectedCamera === 'comms') {
            return "http://127.0.0.1:5000/image_feed1";
        } else if (selectedCamera === 'drivetrain') {
            return "http://127.0.0.1:5000/image_feed2"; 
        }
    };

    const link = getLink();

    return (
      <div>
        <div className="row">
          <div className="col-md-6" style={{ position: 'relative' }}>
            <select style={{ fontSize: '16px', color: '#A9DFBF', position: 'absolute', top: 0, left: "12px", zIndex: 1, backgroundColor:'#1C2833', borderRadius: '7px', padding: '3px', fontWeight: 'bold' }} name="camera" id="camera" onChange={handleCameraChange}>
              <option value="comms">Comms Cam</option>
              <option value="drivetrain">Drivetrain Cam</option>
              <option value="power">RA Cam</option>
              <option value="power">Lab Cam</option>
              <option value="power">Depth Cam</option>
            </select>
            <img src={link} alt="Camera 1" style={{ zIndex: 0 }} />
          </div>
        </div>
      </div>
      );
};

export default Cam1;
