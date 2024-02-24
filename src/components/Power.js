import React from 'react';

const Power = ({ currentLoad,capacity,motorData,jointData,labLoadData }) => {
    return (
      <div>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Load</th>
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

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>FR</th>
            <th scope="col" class="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>FL</th>
            <th scope="col" class="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Bl</th>
            <th scope="col" class="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>BR</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{motorData.frLoad}</td>
          <td>{motorData.flLoad}</td>
          <td>{motorData.brLoad}</td>
          <td>{motorData.blLoad}</td>
        </tr>
      </tbody>
      </table>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J0</th>
            <th scope="col" class="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J1</th>
            <th scope="col" class="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J2</th>
            <th scope="col" class="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J3</th>
            <th scope="col" class="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J4</th>
            <th scope="col" class="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>EE</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{jointData.j0Load}</td>
          <td>{jointData.j1Load}</td>
          <td>{jointData.j2Load}</td>
          <td>{jointData.j3Load}</td>
          <td>{jointData.j4Load}</td>
          <td>{jointData.eeLoad}</td>
        </tr>
      </tbody>
      </table>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="col-2.4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>x</th>
            <th scope="col" class="col-2.4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>y</th>
            <th scope="col" class="col-2.4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>z</th>
            <th scope="col" class="col-2.4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>EM-Tray</th>
            <th scope="col" class="col-2.4" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>EM-Gripper</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{labLoadData.x}</td>
          <td>{labLoadData.y}</td>
          <td>{labLoadData.z}</td>
          <td>{labLoadData.tray}</td>
          <td>{labLoadData.gripper}</td>
        </tr>
      </tbody>
      </table>
      
      </div>
    );
  };
  
  export default Power;