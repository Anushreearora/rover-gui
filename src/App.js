import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Power from './components/Power';
import Comms from './components/Comms';
import Drivetrain from './components/Drivetrain';
import Cam1 from './components/Cam1';
import Cam2 from './components/Cam2';
import VideoFeed from './components/VideoFeed';

const App = () => {
  const [powerData, setPowerData] = useState({});
  const [commsData, setCommsData] = useState({});
  const [drivetrainData, setDrivetrainData] = useState({});
  const [motorData, setMotorData] = useState({});
  const [jointData, setJointData] = useState({});
  const [labLoadData, setLabLoadData] = useState({});

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
    fetch('http://127.0.0.1:5000/motor_data')
      .then(response => response.json())
      .then(data => {
        console.log('Motor Data:', data);
        setMotorData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
    fetch('http://127.0.0.1:5000/joint_data')
      .then(response => response.json())
      .then(data => {
        console.log('Joint Data:', data);
        setJointData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
    fetch('http://127.0.0.1:5000/lab_data')
      .then(response => response.json())
      .then(data => {
        console.log('Lab Load Data:', data);
        setLabLoadData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
      
  }, []);

  return (
    <div className="container mt-4">
      
      <hr/>
      <h2 className="text-center">Rexus Telemetry</h2>
      <hr/>
      
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <Power/>
            </div>
          </div>
          <div className="row">
            <div className="col"> 
              <h5>Comms</h5>
              <Comms/>
            </div>
          </div>
          <div className="row">
            <div className="col"> 
              <h5>Drivetrain</h5>
              <Drivetrain />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ marginTop: '35px' }}>
            <Cam1/> 
          </div>
          <br/>
          <Cam2/> 
        </div>
      </div>
    </div>
  );
};

export default App;
