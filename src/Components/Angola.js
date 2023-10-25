import React, { useState } from 'react';
import './Angola.css';
import Afghanistan from './Afghanistan';

const Angola = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AGOUT', label: 'Unitel S.A.R.L', dataCost: '$0.78320', networkType: '2G only', LTE: 'No LTE' },
    { value: 'AGOMV', label: 'Movicel Telecomunicacoes', dataCost: '$2.92974', networkType: '2G & 3G', LTE: 'No LTE' },
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

export default Angola;
