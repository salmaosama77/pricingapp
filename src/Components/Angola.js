import React, { useState } from 'react';
import './Angola.css';

const Angola = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AGOUT', label: 'Unitel S.A.R.L' },
    { value: 'AGOMV', label: 'Movicel Telecomunicacoes' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="angola-page">
      <table className="angola-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Angola</td>
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
              <td>{network.value === 'AGOUT' ? '$0.78320' : '$2.92974'}</td>
              <td>{network.value === 'AGOMV' ? '2G only' : '2G & 3G'}</td>
              <td>{network.value === 'AGOUT' ? 'No LTE' : 'No LTE'}</td>
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

export default Angola;