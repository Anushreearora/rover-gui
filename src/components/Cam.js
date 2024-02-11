import React from 'react';

const Cam = ({ cameraNumber }) => {
    return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h3 style={{fontSize:'20px',}}>Camera {cameraNumber}</h3>
              <img src="http://127.0.0.1:5000/image_feed1" alt="Camera 1" />
            </div>
          </div>
        </div>
      );
};

export default Cam;