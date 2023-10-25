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
import AntiguaAndBarbuda from './AntiguaAndBarbuda';
import Argentina from './Argentina';
import Armenia from './Armenia';
import Aruba from './Aruba';
import Australia from './Australia';
import Austria from './Austria';

const countryOptions = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'aland-islands', label: 'Aland Islands' },
  { value: 'albania', label: 'Albania' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'andorra', label: 'Andorra' },
  { value: 'angola', label: 'Angola' },
  { value: 'anguilla', label: 'Anguilla' },
  { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'armenia', label: 'Armenia' },
  { value: 'aruba', label: 'Aruba' },
  { value: 'australia', label: 'Australia' },
  { value: 'austria', label: 'Austria' },
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
    if (selectedCountry && selectedCountry.value === 'antigua-and-barbuda') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'argentina') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'armenia') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'aruba') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'australia') {
      return;
    }
    if (selectedCountry && selectedCountry.value === 'austria') {
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
       {selectedCountry && selectedCountry.value === 'antigua-and-barbuda' && (
        <AntiguaAndBarbuda /> 
      )}
      {selectedCountry && selectedCountry.value === 'argentina' && (
        <Argentina /> 
      )}
       {selectedCountry && selectedCountry.value === 'armenia' && (
        <Armenia /> 
      )}
      {selectedCountry && selectedCountry.value === 'aruba' && (
        <Aruba /> 
      )}
      {selectedCountry && selectedCountry.value === 'australia' && (
        <Australia /> 
      )}
      {selectedCountry && selectedCountry.value === 'austria' && (
        <Austria /> 
      )}
      
  
    </div>
  );
};

export default HomePage;
