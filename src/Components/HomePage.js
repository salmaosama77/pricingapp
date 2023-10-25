// import React, { useState } from 'react';
// import Select from 'react-select';
// import './HomePage.css';

// const countryOptions = [
//   { value: 'afghanistan', label: 'Afghanistan' },
//   { value: 'aland-islands', label: 'Aland Islands' },
//   { value: 'albania', label: 'Albania' },
//   { value: 'algeria', label: 'Algeria' },
//   { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
//   { value: 'Argentina', label: 'Argentina' },
//   { value: 'Armenia', label: 'Armenia' },
//   { value: 'Aruba', label: 'Aruba' },
//   { value: 'Australia', label: 'Australia' },
//   { value: 'Austria', label: 'Austria' },
  
// ];

// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     border: state.isFocused ? '1.5px solid #29386c' : provided.border,
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isFocused ? '#29386c' : '#bbc6e3',
//     color: state.isFocused ? 'white' : 'black',
//     '&:hover': {
//       backgroundColor: '#354581',
//       color: 'white',
//     },
//   }),
// };

// const HomePage = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//   };

//   const handleSubmit = () => {
//     if (selectedCountry && selectedCountry.value === 'afghanistan') {
//       // Redirect to the Afghanistan page using window.location
//       window.location.href = '/afghanistan';
//     }
//   };

//   return (
//     <div className="homepage">
//       <div className="form-container">
//         <h1 className='h'>WELCOME!</h1>
//         <p className='p'>Please Pick The Desired Country</p>
//         <Select
//           options={countryOptions}
//           placeholder="Country"
//           className="custom-select"
//           styles={customStyles}
//           onChange={handleCountryChange}
//         />
//         <button className='submit' onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };
// export default HomePage;




// import React, { useState } from 'react';
// import Select from 'react-select';
// import Afghanistan from './Afghanistan';
// import './HomePage.css';
// import './Afghanistan.css';

// const countryOptions = [
//   { value: 'afghanistan', label: 'Afghanistan' },
//   { value: 'aland-islands', label: 'Aland Islands' },
//   { value: 'albania', label: 'Albania' },
//   { value: 'algeria', label: 'Algeria' },
//   { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
//   { value: 'Argentina', label: 'Argentina' },
//   { value: 'Armenia', label: 'Armenia' },
//   { value: 'Aruba', label: 'Aruba' },
//   { value: 'Australia', label: 'Australia' },
//   { value: 'Austria', label: 'Austria' },
  
// ];

// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     border: state.isFocused ? '1.5px solid #29386c' : provided.border,
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isFocused ? '#29386c' : '#bbc6e3',
//     color: state.isFocused ? 'white' : 'black',
//     '&:hover': {
//       backgroundColor: '#354581',
//       color: 'white',
//     },
//   }),
// };

// const HomePage = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//   };

//   const handleSubmit = () => {
//     if (selectedCountry && selectedCountry.value === 'afghanistan') {
//       // Redirect to the Afghanistan page using window.location
//       window.location.href = '/afghanistan';
//     }
//   };

//   return (
//     <div className="homepage">
//       <div className="form-container">
//         <h1 className='h'>WELCOME!</h1>
//         <p className='p'>Please Pick The Desired Country</p>
//         <Select
//           options={countryOptions}
//           placeholder="Country"
//           className="custom-select"
//           styles={customStyles}
//           value={selectedCountry} 
//           onChange={handleCountryChange}
//         />
//       </div>
//       {selectedCountry && selectedCountry.value === 'afghanistan' && (
//         <Afghanistan />
//       )}
//     </div>
//   );
// };
// export default HomePage;



import React, { useState } from 'react';
import Select from 'react-select';
import './HomePage.css';
import './Afghanistan.css';
import './Aland.css';
import Afghanistan from './Afghanistan';
import AlandIslands from './AlandIslands';
import Albania from './Albania';
import Algeria from './Algeria';
import Andorra from './Andorra';
import Angola from './Angola';
import Anguilla from './Anguilla';


const countryOptions = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'aland-islands', label: 'Aland Islands' },
  { value: 'albania', label: 'Albania' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'andorra', label: 'Andorra' },
  { value: 'angola', label: 'Angola' },
  { value: 'anguilla', label: 'Anguilla' },
  { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Armenia', label: 'Armenia' },
  { value: 'Aruba', label: 'Aruba' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Austria', label: 'Austria' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1.5px solid #29386c' : provided.border,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#29386c' : '#bbc6e3',
    color: state.isFocused ? 'white' : 'black',
    '&:hover': {
      backgroundColor: '#354581',
      color: 'white',
    },
  }),
};

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleSubmit = () => {
    if (selectedCountry && selectedCountry.value === 'afghanistan') {
      // Redirect to the Afghanistan page using window.location
      window.location.href = '/afghanistan';
    }
    if (selectedCountry && selectedCountry.value === 'aland-islands') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'albania') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'algeria') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'andorra') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'angola') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'anguilla') {
      return;
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage">
        <div className="form-container">
          <h1 className='h'>WELCOME!</h1>
          <p className='p'>Please Pick The Desired Country</p>
          <Select
            options={countryOptions}
            placeholder="Country"
            className="custom-select"
            styles={customStyles}
            value={selectedCountry} 
            onChange={handleCountryChange}
          />
        </div>
      </div>
      {selectedCountry && selectedCountry.value === 'afghanistan' && (
        <Afghanistan />
      )}
        {selectedCountry && selectedCountry.value === 'aland-islands' && (
        <AlandIslands /> 
      )}
       {selectedCountry && selectedCountry.value === 'albania' && (
        <Albania /> 
      )}
       {selectedCountry && selectedCountry.value === 'algeria' && (
        <Algeria /> 
      )}
       {selectedCountry && selectedCountry.value === 'andorra' && (
        <Andorra /> 
      )}
       {selectedCountry && selectedCountry.value === 'angola' && (
        <Angola /> 
      )}
       {selectedCountry && selectedCountry.value === 'anguilla' && (
        <Anguilla /> 
      )}
  
    </div>
  );
};

export default HomePage;
