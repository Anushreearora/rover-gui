import React from 'react';

const Power = ({ currentLoad,capacity,motorData,jointData,labLoadData }) => {
    const [showMore, setShowMore] = React.useState(false);

    const toggleMenu = () => {
      setShowMore(!showMore);
    };

    return (
      <div> 

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Power</h4>
        <div onClick={toggleMenu} style={{ cursor: 'pointer' , color: '#A9DFBF', transition: 'transform 0.3s' }}>
          <span style={{ transform: showMore ? 'rotateZ(90deg)' : 'rotateZ(0)', marginLeft: '0.5rem' }}>&#10148;</span>
        </div>
      </div>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Load</th>
            <th scope="col" class="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Capacity</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{currentLoad}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{capacity}</td>
        </tr>
      </tbody>
      </table>

      <div style={{ overflow: 'hidden', transition: 'max-height 0.5s', maxHeight: showMore ? '1000px' : '0' }}>

      Wheels
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
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.frLoad}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.flLoad}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.brLoad}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.blLoad}</td>
        </tr>
      </tbody>
      </table>

      Actuators
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
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j0Load}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j1Load}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j2Load}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j3Load}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j4Load}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.eeLoad}</td>
        </tr>
      </tbody>
      </table>

      Lab
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
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.x}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.y}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.z}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.tray}</td>
          <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.gripper}</td>
        </tr>
      </tbody>
      </table>

      </div>

      </div>

    );
  };
  
  export default Power;