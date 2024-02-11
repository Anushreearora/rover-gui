import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Power from './components/Power';
import Comms from './components/Comms';
import Drivetrain from './components/Drivetrain';
import Cam from './components/Cam';

const App = () => {
  const [powerData, setPowerData] = useState({});
  const [commsData, setCommsData] = useState({});
  const [drivetrainData, setDrivetrainData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/power_data')
      .then(response => response.json())
      .then(data => {
        console.log('Power Data:', data); 
        setPowerData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
    fetch('http://127.0.0.1:5000/comms_data')
      .then(response => response.json())
      .then(data => {
        console.log('Comms Data:', data);
        setCommsData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
    fetch('http://127.0.0.1:5000/drivetrain_data')
      .then(response => response.json())
      .then(data => {
        console.log('Drivetrain Data:', data);
        setDrivetrainData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  //add fetch for comms data




  return (
    <div className="container mt-4">
      
      <h1 className="text-center">Team Rexus GUI</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col"> Power
              <Power currentLoad={powerData.currentLoad} capacity={powerData.capacity}/>
            </div>
          </div>
          <div className="row">
            <div className="col"> Comms
              <Comms status={commsData.status} speed={commsData.speed}/>
            </div>
          </div>
          <div className="row">
            <div className="col"> Drivetrain
              <Drivetrain direction={drivetrainData.direction} gps={drivetrainData.gps} imu={drivetrainData.imu} reference={drivetrainData.reference} speed={drivetrainData.reference}/>
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
