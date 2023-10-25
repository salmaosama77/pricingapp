import React, { useState } from 'react';
import './AntiguaAndBarbuda.css';
import Afghanistan from './Afghanistan';

const AntiguaAndBarbuda = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ATGCW', label: 'Cable & Wireless-LIME', dataCost: '$0.01694', networkType: '2G & 3G', LTE: 'LTE' },
    { value: 'JAMDC', label: 'Digicel', dataCost: '$0.05082', networkType: '2G & 3G', LTE: 'LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="antuguaandbarbuda-page">
      <table className="antuguaandbarbuda-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Antigua And Barbuda</td>
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
              <td>1</td>
              <td>{network.dataCost}</td>
              <td>{network.networkType}</td>
              <td>{network.LTE}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedNetwork and <Afghanistan network={selectedNetwork} /> */}
    </div>
  );
};

export default AntiguaAndBarbuda;
