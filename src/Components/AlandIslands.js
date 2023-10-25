// import React from 'react';
// import './Aland.css'; 

// const AlandIslands = () => {
//   return (
//     <div className="Aland-page">
//       {/* First Table */}
//       <table className="Aland-table">
//         <tbody>
//           <tr className="blue-background">
//             <td colSpan="6">Aland Islands</td>
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
//             <td>Finland-Aland</td>
//             <td>FINAM</td>
//             <td>5</td>
//             <td>$0.01650</td>
//             <td>2G & 3G</td>
//             <td>No LTE</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AlandIslands;




// import React, { useState } from 'react';
// import './Aland.css';

// const AlandIslands = () => {
//   const [selectedNetwork, setSelectedNetwork] = useState(null);
  
//   const networkOptions = [
//     { value: 'FINAM', label: 'Finland-Aland' },
//     // Add more network options here
//   ];

//   const handleNetworkChange = (selectedOption) => {
//     setSelectedNetwork(selectedOption);
//   };

//   return (
//     <div className="Aland-page">
//       <table className="Aland-table">
//         <tbody>
//           <tr className="blue-background">
//             <td colSpan="6">Aland Islands</td>
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
//             <td className="clickable-cell" onClick={() => handleNetworkChange(networkOptions[0])}>
//               {selectedNetwork ? selectedNetwork.label : 'Select a network'}
//             </td>
//             <td>{selectedNetwork ? selectedNetwork.value : ''}</td>
//             <td>5</td>
//             <td>$0.01650</td>
//             <td>2G & 3G</td>
//             <td>No LTE</td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="selected-network">
//         {selectedNetwork && (
//           <p>Selected Network: {selectedNetwork.label}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AlandIslands;




import React, { useState } from 'react';
import './Aland.css';
// import Afghanistan from './Afghanistan'; 
import Afghanistan from './Afghanistan';

const AlandIslands = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'FINAM', label: 'Finland-Aland' },
    // Add more network options here
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Aland-page">
      <table className="Aland-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Aland Islands</td>
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
              <td>5</td>
              <td>$0.01650</td>
              <td>2G & 3G</td>
              <td>No LTE</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedNetwork && (
        <Afghanistan network={selectedNetwork} />
      )}
    </div>
  );
};

export default AlandIslands;
