import React from 'react';

const Comms = ({ status,speed }) => {
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
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{speed}</td>
        </tr>
      </tbody>
      </table>
    );
  };
  
  export default Comms;