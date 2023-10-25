import React, { useState } from 'react';
import './Albania.css';

const Albania = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ALBVF', label: 'Albania-Vodafone' },
    { value: 'ALBAM', label: 'Albania-One' },
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
              <td>{network.value === 'ALBVF' ? '$0.00297' : '$0.17864'}</td>
              <td>{network.value === 'ALBAM' ? '2G & 3G' : '2G & 3G'}</td>
              <td>{network.value === 'ALBVF' ? 'LTE' : 'in process'}</td>
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

export default Albania;