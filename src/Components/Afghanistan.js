// import React from 'react';
// import './Afghanistan.css'; // Make sure you have your CSS file

// const Afghanistan = () => {
//   return (
//     <div className="afghanistan-page">
//       {/* <h1 className='head'>Afghanistan</h1> */}
//       {/* First Table */}
//       <table className="afghanistan-table">
//         <tbody>
//           <tr className="blue-background">
//             <td colSpan="6">Afghanistan</td>
//           </tr>
//           <tr className="orange-background">
//             <td>Network</td>
//             <td>VPMN</td>
//             <td>IMSI</td>
//             <td>Data Cost/MB</td>
//             <td>2G/3G</td>
//             <td>LTE</td>
//           </tr>
//           <tr>
//             <td>MTN Afghanistan</td>
//             <td>AFGAR</td>
//             <td>8</td>
//             <td>$0.01650</td>
//             <td>2G only</td>
//             <td>No LTE</td>
//           </tr>
//         </tbody>
//       </table>
//       {/* Second Table */}
//       <table className="afghanistan-table">
//         <tbody>
//           <tr className="blue-background">
//             <td colSpan="6">Afghanistan</td>
//           </tr>
//           <tr className="orange-background">
//             <td>Network</td>
//             <td>VPMN</td>
//             <td>IMSI</td>
//             <td>Data Cost/MB</td>
//             <td>2G/3G</td>
//             <td>LTE</td>
//           </tr>
//           <tr>
//             <td>Roshan</td>
//             <td>AFGTD</td>
//             <td>8</td>
//             <td>$0.20724</td>
//             <td>2G only</td>
//             <td>LTE</td>
//           </tr>
//         </tbody>
//       </table>

//       {/* Third Table */}
//       <table className="afghanistan-table">
//         <tbody>
//           <tr className="blue-background">
//             <td colSpan="6">Afghanistan</td>
//           </tr>
//           <tr className="orange-background">
//             <td>Network</td>
//             <td>VPMN</td>
//             <td>IMSI</td>
//             <td>Data Cost/MB</td>
//             <td>2G/3G</td>
//             <td>LTE</td>
//           </tr>
//           <tr>
//             <td>Afghan Wireless Communication</td>
//             <td>AFGAW</td>
//             <td>8</td>
//             <td>$0.38797</td>
//             <td>2G & 3G</td>
//             <td>LTE</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Afghanistan;


import React, { useState } from 'react';
import './Afghanistan.css';
import AlandIslands from './AlandIslands';

const Afghanistan = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AFGAR', label: 'MTN Afghanistan' },
    { value: 'AFGTD', label: 'Roshan' },
    { value: 'AFGAW', label: 'Afghan Wireless Communication' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="afghanistan-page">
      <table className="afghanistan-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Afghanistan</td>
          </tr>
          <tr className="orange-background">
            <td>Network</td>
            <td>VPMN</td>
            <td>IMSI</td>
            <td>Data Cost/MB</td>
            <td>2G/3G</td>
            <td>LTE</td>
          </tr>
          {networkOptions.map((network) => (
            <tr key={network.value}>
              <td
                className="clickable-cell"
                onClick={() => handleNetworkClick(network)}
              >
                {network.label}
              </td>
              <td>{network.value}</td>
              <td>8</td>
              <td>{network.value === 'AFGAR' ? '$0.01650' : '$0.20724'}</td>
              <td>{network.value === 'AFGAR' ? '2G only' : '2G & 3G'}</td>
              <td>{network.value === 'AFGAR' ? 'No LTE' : 'LTE'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedNetwork && (
        <AlandIslands network={selectedNetwork} />
      )}
    </div>
  );
};

export default Afghanistan;
