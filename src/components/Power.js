import React from 'react';

const Power = ({ currentLoad,capacity }) => {
    return (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Current Load</th>
            <th scope="col" class="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Capacity</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{currentLoad}</td>
          <td>{capacity}</td>
        </tr>
      </tbody>
      </table>
    );
  };
  
  export default Power;