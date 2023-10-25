import React, { useState } from 'react';
import './Anguilla.css';
import Afghanistan from './Afghanistan';

const Anguilla = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'AIACW', label: 'Cable & Wireless-LIME', dataCost: '$0.01815', networkType: '2G & 3G', LTE: 'LTE' },
    { value: 'JAMDC', label: 'Digicel', dataCost: '$0.05082', networkType: '2G & 3G', LTE: 'LTE' },
  ];

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="anguilla-page">
      <table className="anguilla-table">
        <tbody>
          <tr className="blue-background">
            <td colSpan="6">Anguilla</td>
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
      {/* {selectedNetwork && (
        <Afghanistan network={selectedNetwork} />
      )} */}
    </div>
  );
};

export default Anguilla;
