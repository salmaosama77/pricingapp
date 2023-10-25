import React, { useState } from 'react';
import './Algeria.css';
import Afghanistan from './Afghanistan';

const Algeria = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'DZAOT', label: 'Optimum Telecom Algeria Spa', dataCost: '$0.00616', networkType: '2G & 3G', LTE: 'No LTE' },
    { value: 'DZAA1', label: 'Ministere Des Postes et Telecom', dataCost: '$0.01837', networkType: '2G & 3G', LTE: 'LTE' },
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
              <td>{network.dataCost}</td>
              <td>{network.networkType}</td>
              <td>{network.LTE}</td>
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

export default Algeria;
