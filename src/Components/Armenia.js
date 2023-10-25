import React, { useState } from 'react';
import './Armenia.css';
import Afghanistan from './Afghanistan';

const Armenia = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ARMO5', label: '(Vivacell) K Telecom CJSC', dataCost: '$0.00517', networkType: '2G & 3G', LTE: ' No LTE' },
    { value: 'ARMO1', label: 'Albania-One', dataCost: '$0.00616', networkType: '2G & 3G', LTE: 'No LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="Armenia-page">
      <table className="Armenia-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Armenia</td>
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
        <Afghanistan network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Armenia;