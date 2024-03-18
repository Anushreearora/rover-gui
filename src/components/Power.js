import React, { useState, useEffect } from 'react';

const Power = () => {
    const [showMore, setShowMore] = useState(false);
    const [currentLoad, setCurrentLoad] = useState(0);
    const [capacity, setCapacity] = useState(88600);
    const [motorData, setMotorData] = useState({ frLoad: 12.1, flLoad: 12.4, brLoad: 12.5, blLoad: 11.8 });
    const [jointData, setJointData] = useState({ j0Load: 0, j1Load: 0, j2Load: 0, j3Load: 0, j4Load: 0, eeLoad: 0 });
    const [labLoadData, setLabLoadData] = useState({ x: 0, y: 0, z: 0, tray: 0, gripper: 0 });

    const toggleMenu = () => {
        setShowMore(!showMore);
    };

    useEffect(() => {
      const interval = setInterval(() => {

          const getRandomValue = () => (Math.round((Math.random() * 0.4) / 0.1) * 0.1).toFixed(1);


          setCurrentLoad(() => {
            const currentLoadCalc = (
              parseFloat(motorData.frLoad) + parseFloat(motorData.flLoad) + parseFloat(motorData.brLoad) + parseFloat(motorData.blLoad) +
              parseFloat(jointData.j0Load) + parseFloat(jointData.j1Load) + parseFloat(jointData.j2Load) + parseFloat(jointData.j3Load) + parseFloat(jointData.j4Load) + parseFloat(jointData.eeLoad) +
              parseFloat(labLoadData.x) + parseFloat(labLoadData.y) + parseFloat(labLoadData.z) + parseFloat(labLoadData.tray) + parseFloat(labLoadData.gripper)
            );
            return currentLoadCalc.toFixed(1);
          });
  
          setMotorData(prevMotorData => {
              const frLoadCalc = Math.min(14.5, Math.max(0, parseFloat(prevMotorData.frLoad) + parseFloat(getRandomValue())));
              const flLoadCalc = Math.min(14.5, Math.max(0, parseFloat(prevMotorData.flLoad) + parseFloat(getRandomValue())));
              const brLoadCalc = Math.min(14.5, Math.max(0, parseFloat(prevMotorData.brLoad) + parseFloat(getRandomValue())));
              const blLoadCalc = Math.min(14.5, Math.max(0, parseFloat(prevMotorData.blLoad) + parseFloat(getRandomValue())));
  
              return {
                  frLoad: frLoadCalc.toFixed(1),
                  flLoad: flLoadCalc.toFixed(1),
                  brLoad: brLoadCalc.toFixed(1),
                  blLoad: blLoadCalc.toFixed(1)
              };
          });

          setCurrentLoad(() => {});
  
      }, 1000);
  
      return () => clearInterval(interval);
  }, []);
  

    return (
        <div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h5>Power</h5>
                <div onClick={toggleMenu} style={{ cursor: 'pointer', color: '#A9DFBF', transition: 'transform 0.3s' }}>
                    <span style={{ transform: showMore ? 'rotateZ(90deg)' : 'rotateZ(0)', marginLeft: '0.5rem' }}>&#10148;</span>
                </div>
            </div>

            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col" className="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Load</th>
                        <th scope="col" className="col-6" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{ (parseFloat(motorData.frLoad) + parseFloat(motorData.flLoad) + parseFloat(motorData.brLoad) + parseFloat(motorData.blLoad) +
            parseFloat(jointData.j0Load) + parseFloat(jointData.j1Load) + parseFloat(jointData.j2Load) + parseFloat(jointData.j3Load) + parseFloat(jointData.j4Load) + parseFloat(jointData.eeLoad) +
            parseFloat(labLoadData.x) + parseFloat(labLoadData.y) + parseFloat(labLoadData.z) + parseFloat(labLoadData.tray) + parseFloat(labLoadData.gripper)
        ).toFixed(1) }A</td>
                        <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{capacity}mAh</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ overflow: 'hidden', transition: 'max-height 0.5s', maxHeight: showMore ? '1000px' : '0' }}>

                Wheels
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>FR</th>
                            <th scope="col" className="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>FL</th>
                            <th scope="col" className="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>Bl</th>
                            <th scope="col" className="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>BR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.frLoad}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.flLoad}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.brLoad}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{motorData.blLoad}A</td>
                        </tr>
                    </tbody>
                </table>

                Actuators
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J0</th>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J1</th>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J2</th>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J3</th>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>J4</th>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>EE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j0Load}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j1Load}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j2Load}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j3Load}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.j4Load}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{jointData.eeLoad}A</td>
                        </tr>
                    </tbody>
                </table>

                Lab
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>x</th>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>y</th>
                            <th scope="col" className="col-2" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>z</th>
                            <th scope="col" className="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>EM-Tray</th>
                            <th scope="col" className="col-3" style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>EM-Gripper</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.x}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.y}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.z}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.tray}A</td>
                            <td style={{ backgroundColor: '#1C2833', color: '#A9DFBF' }}>{labLoadData.gripper}A</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Power;
