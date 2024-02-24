import React from 'react';

const Drivetrain = ({ direction,gps,imu,reference,speed }) => {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" class="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Cardinal Direction</th>
            <th scope="col" class="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>GPS Coords</th>
            <th scope="col" class="col-1" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>IMU(Inclination)</th>
            <th scope="col" class="col-1" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Reference</th>
            <th scope="col" class="col-1" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Speed</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{direction}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{gps}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{imu}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{reference}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{speed}</td>

        </tr>
      </tbody>
      </table>
    );
  };
  
  export default Drivetrain;

