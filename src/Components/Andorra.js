import React, { useState } from 'react';
import './Andorra.css';
import Afghanistan from './Afghanistan';

const Andorra = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ANDMA', label: 'Mobiland (d. STA)', dataCost: '$0.02035', networkType: '2G & 3G', LTE: 'No LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Andorra-page">
      <table className="Andorra-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Andorra</td>
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
              <td>9</td>
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

export default Andorra;
