import React, { useState } from 'react';
import './Argentina.css';

const Argentina = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ARGTM', label: 'Telefonica Moviles Argentina', dataCost: '$0.00800', networkType: '2G & 3G', LTE: 'LTE' },
    { value: 'ARGCM', label: 'CTI Movil', dataCost: '$0.01320', networkType: '2G & 3G', LTE: 'LTE' },
    { value: 'ARGTP', label: 'Telecom Personal S.A. ,Argen.', dataCost: '$0.02310', networkType: '2G & 3G', LTE: 'LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Argentina-page">
      <table className="Argentina-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Argentina</td>
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
              <td>7</td>
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

export default Argentina;