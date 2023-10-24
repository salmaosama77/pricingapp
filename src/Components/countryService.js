// import axios from 'axios';

// // Function to fetch and format a list of countries
// const fetchAllCountries = async () => {
//   try {
//     const response = await axios.get('https://restcountries.com/v3.1/all');
//     const countries = response.data.map((country) => ({
//       value: country.cca2,
//       label: country.name.common,
//     }));
//     countries.sort((a, b) => a.label.localeCompare(b.label));
//     return countries;
//   } catch (error) {
//     console.error('Error fetching countries:', error);
//     return [];
//   }
// };

// export { fetchAllCountries };
