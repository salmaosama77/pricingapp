import React, { useState } from 'react';
import './Albania.css';
import Afghanistan from './Afghanistan';

const Albania = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ALBVF', label: 'Albania-Vodafone', dataCost: '$0.00297', networkType: '2G & 3G', LTE: 'LTE' },
    { value: 'ALBAM', label: 'Albania-One', dataCost: '$0.17864', networkType: '2G & 3G', LTE: 'in process' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="albania-page">
      <table className="albania-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Albania</td>
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

export default Albania;
