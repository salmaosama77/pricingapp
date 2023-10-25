import React, { useState } from 'react';
import './Austria.css';

const Afghanistan = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AUTHU', label: 'Hutchison Drei Austria GmbH', dataCost: '$0.00209', networkType: '2G & 3G', LTE: 'No LTE' },
    { value: 'AUTCA', label: 'Hutchison Drei Austria GmbH', dataCost: '$0.00209', networkType: '2G & 3G', LTE: 'LTE' },
    { value: 'AUTPT', label: 'A1 Telekom Austria AG', dataCost: '$0.00407', networkType: '2G & 3G', LTE: 'LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Austria-page">
      <table className="Austria-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Austria</td>
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
      {/* {selectedNetwork && (
        <AlandIslands network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Austria;
