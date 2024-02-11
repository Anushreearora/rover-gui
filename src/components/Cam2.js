import React, { useState } from 'react';

const Cam2 = () => {
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
            <div className="col-md-6">
              <select style={{fontSize:'20px'}} name="camera" id="camera" onChange={handleCameraChange}>
                <option value="comms">Comms Cam</option>
                <option value="drivetrain">Drivetrain Cam</option>
              </select>
              <img src={link} alt="Camera 1" />
            </div>
          </div>
        </div>
      );
};

export default Cam2;
