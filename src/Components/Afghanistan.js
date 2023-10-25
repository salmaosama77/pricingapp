import React, { useState } from 'react';
import './Afghanistan.css';
import AlandIslands from './AlandIslands';

const Afghanistan = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AFGAR', label: 'MTN Afghanistan', dataCost: '$0.01650', networkType: '2G only', LTE: 'No LTE' },
    { value: 'AFGTD', label: 'Roshan', dataCost: '$0.20724', networkType: '2G only', LTE: 'LTE' },
    { value: 'AFGAW', label: 'Afghan Wireless Communication', dataCost: '$0.38797', networkType: '2G & 3G', LTE: 'LTE' },
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
              <td>{network.dataCost}</td>
              <td>{network.networkType}</td>
              <td>{network.LTE}</td>
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
