import React, { useState } from 'react';
import './Andorra.css'; 

const Andorra = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networkOptions = [
    { value: 'ANDMA', label: 'Mobiland (d. STA)' },
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
              <td>$0.02035</td>
              <td>2G & 3G</td>
              <td>No LTE</td>
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

export default Andorra;
