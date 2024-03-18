import React from 'react';
import { useState , useEffect} from 'react';


const Drivetrain = () => {

    const [gps, setGps] = useState([1.3429032,103.6801850]);
    const [imu, setImu] = useState([0,0,0]);
    const [speed, setSpeed] = useState([0,0]);

    useEffect(() => {
      const interval = setInterval(() => {
          const getRandomValue = () => (Math.round((Math.random() * 0.8 - 0.4) / 0.1) * 0.1).toFixed(1);
          

          
          setImu(prevImu => {
              const newX = Math.min(0.5, Math.max(0, parseFloat(prevImu[0]) + parseFloat(getRandomValue())));
              const newY = Math.min(28, Math.max(20, parseFloat(prevImu[1]) + parseFloat(getRandomValue())));
              const newZ = Math.min(0.5, Math.max(0, parseFloat(prevImu[2]) + parseFloat(getRandomValue())));
  
              return [newX.toFixed(1), newY.toFixed(1), newZ.toFixed(1)];
          });
          

          setSpeed(prevSpeed => {
            const newX = Math.min(0.5, Math.max(0.3, parseFloat(prevSpeed[0]) + parseFloat(getRandomValue())));
            const newY = Math.min(0, Math.max(0, parseFloat(prevSpeed[1]) + parseFloat(getRandomValue())));
            return [newX.toFixed(1), newY.toFixed(1)];
        });
        
  
      }, 1000);
  
      return () => clearInterval(interval);
  }, []);



    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" class="col-4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>GPS</th>
            <th scope="col" class="col-4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Inclination</th>
            <th scope="col" class="col-4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Speed</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{gps[0]},{gps[1]} </td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{imu[0]},{imu[1]},{imu[2]}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{speed[0]},{speed[1]}</td>

        </tr>
      </tbody>
      </table>
    );
  };
  
  export default Drivetrain;

