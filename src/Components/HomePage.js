import React , { useState , useEffect } from 'react';
import Select from 'react-select';
import './HomePage.css';


const countryOptions = [
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'aland-islands', label: 'Aland Islands' },
    { value: 'albania', label: 'Albania' },
    { value: 'algeria', label: 'Algeria' },
    { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Armenia', label: 'Armenia' },
    { value: 'Aruba', label: 'Aruba' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Austria', label: 'Austria' },
    // Add more countries here
];

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? '1.5px solid #29386c' : provided.border,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#29386c' : '#bbc6e3', // Light blue when not hovered, dark blue when hovered
      color: state.isFocused ? 'white' : 'black',
      '&:hover': {
        backgroundColor: '#354581', // Dark blue on hover
        color: 'white', // Change text color to white on hover
      },
    }),
  };
//#eef5fd
const HomePage = () => {
  
   return (
        <div className="homepage">
            <div className="form-container">
                <h1 className='h'>WELCOME!</h1>
                <p className='p'>Please Pick The Desired Country</p>
                <Select
                    options={countryOptions}
                    placeholder="Country"
                    className="custom-select"
                    styles={customStyles}
                />
                <button className='submit'>Submit</button>
            </div>
        </div>
    );
};

export default HomePage;
