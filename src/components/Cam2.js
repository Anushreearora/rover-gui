import React, { useState } from 'react';

const Cam2 = () => {
    // State to track the selected camera option
    const [selectedCamera, setSelectedCamera] = useState('comms');

    // Function to handle select change
    const handleCameraChange = (event) => {
        setSelectedCamera(event.target.value);
    };

    // Dynamically generate the link based on the selected camera
    const getLink = () => {
        if (selectedCamera === 'comms') {
            return "http://127.0.0.1:5000/image_feed1";
        } else if (selectedCamera === 'drivetrain') {
            return "http://127.0.0.1:5000/image_feed2"; // Example link for drivetrain cam
        }
        // Add more conditions for other camera options if needed
    };

    // Get the link based on the selected camera
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
