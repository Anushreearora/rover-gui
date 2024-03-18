import React from 'react';
import { useState,useEffect } from 'react';

const Comms = () => {
    const [status, setStatus] = useState('Connected');
    const [speed, setSpeed] = useState(10);

    useEffect(() => {
      const interval = setInterval(() => {
        const getRandomValue = () => (Math.round((Math.random() * 0.8 - 0.4) / 0.1) * 0.1).toFixed(1);

          // Update speed state while ensuring it stays in the range of 8 to 12
          setSpeed(prevSpeed => {
              let newSpeed = Math.min(12, Math.max(5, parseFloat(prevSpeed) + parseFloat(getRandomValue())));
              // Check if newSpeed exceeds the bounds, and if so, set it to the nearest bound
              return newSpeed.toFixed(1);
          });

      }, 1000);

      return () => clearInterval(interval);
  }, []);
    return (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
          <th scope="col" class="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Status</th>
          <th scope="col" class="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Speed</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{status}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{speed} mbps</td>
        </tr>
      </tbody>
      </table>
    );
  };
  
  export default Comms;