// import React from 'react';
// import './App.css';
// import HomePage from './Components/HomePage';
// import Afghanistan from './Components/Afghanistan';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/afghanistan" element={<Afghanistan/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import HomePage from './Components/HomePage';
import Afghanistan from './Components/Afghanistan';
import './App.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <HomePage onCountryChange={handleCountryChange} />
      <div className="content">
        {selectedCountry && selectedCountry.value === 'afghanistan' && <Afghanistan />}
      </div>
    </div>
  );
}

export default App;

