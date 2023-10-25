import React, { useState } from 'react';
import './Australia.css';
import Afghanistan from './Afghanistan';

const Australia = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AUSOP', label: 'YES OPTUS', dataCost: '$0.00341', networkType: '3G only', LTE: 'LTE' },
    { value: 'AUSTA', label: 'Telstra', dataCost: '$0.00429', networkType: '2G & 3G', LTE: 'LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Australia-page">
      <table className="Australia-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Australia</td>
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
              <td>10</td>
              <td>{network.dataCost}</td>
              <td>{network.networkType}</td>
              <td>{network.LTE}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedNetwork && (
        <Afghanistan network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Australia;