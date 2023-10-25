import React, { useState } from 'react';
import './Algeria.css';

const Algeria = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'DZAOT', label: 'Optimum Telecom Algeria Spa' },
    { value: 'DZAA1', label: 'Ministere Des Postes et Telecom' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="algeria-page">
      <table className="algeria-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Algeria</td>
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
              <td>3</td>
              <td>{network.value === 'DZAAOT' ? '$0.00616' : '$0.01837'}</td>
              <td>{network.value === 'DZAA1' ? '2G & 3G' : '2G & 3G'}</td>
              <td>{network.value === 'DZAOT' ? 'No LTE' : 'LTE'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedNetwork && (
        <AlandIslands network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Algeria;