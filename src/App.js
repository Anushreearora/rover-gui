import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Power from './components/Power';
import Comms from './components/Comms';
import Drivetrain from './components/Drivetrain';
import Cam from './components/Cam';

const App = () => {
  const [powerData, setPowerData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/power_data')
      .then(response => response.json())
      .then(data => {
        console.log('Power Data:', data); 
        setPowerData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col"> Power
              <Power currentLoad={powerData.currentLoad} capacity={powerData.capacity}/>
            </div>
          </div>
          <div className="row">
            <div className="col"> Comms
              <Comms/>
            </div>
          </div>
          <div className="row">
            <div className="col"> Drivetrain
              <Drivetrain/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <Cam cameraNumber={1}/> 
          <Cam cameraNumber={2}/> 
        </div>
      </div>
    </div>
  );
};

export default App;
