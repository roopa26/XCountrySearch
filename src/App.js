// import './App.css';
// import CountryCard from './components/Card/CountryCard';
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {

//   const [countryData, setCountryData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   //const timeIntervalId = useRef(null);

//   const endpoint = "https://restcountries.com/v3.1/all";

//   useEffect(()=>{
//     const fetchDataAndLog = async () => {
//       try {
//         const res = await fetchData();
//         if (!Array.isArray(res)) { // Check if the response is not an array
//           throw new Error("Invalid response from API");
//       }
//         setCountryData(res);
//         setFilteredData(res);
//       } catch (error) {
//         console.error(error);
//       }
//   };
//   fetchDataAndLog();
//   },[]);

//   const fetchData =async ()=>{
//     debugger;
//     try{
//       const response = await fetch(endpoint);
//       if (!response.ok) {
//         throw new Error("Error processing API");
//       }
//       return await response.json();
//     }
//     catch(ex){
//       console.log(ex);
//     }
//   }

//   const hanldeOnChange = (e) => {
//     setSearchText(e.target.value.trim());
//   }

//   const debounceSearch = ()=>{
//     const filteredData = countryData.filter((item) => {return item.name.official.includes(searchText)});
//     setFilteredData(filteredData);
//     // clearInterval(timeIntervalId.current);

//     // timeIntervalId.current = setTimeout(()=>{
//     //   const filteredData = countryData.filter((item) => {return item.name.official.toLowerCase().includes(searchText)});
//     //   setFilteredData(filteredData);
//     // },100)
//   }

//   useEffect(()=>{
//     if(searchText.length > 0){
//       debounceSearch();      
//     }
//     else{
//       setFilteredData(countryData);
//     }
//   },[searchText]);

//   return (
//     <div>
//       <input style={{width:'500px',height:'20px',margin:'10px auto', display:'block'}} type = "text" placeholder='Search for countries...' value={searchText} onChange={hanldeOnChange}/>
//       <div className='wrap'>
//       {filteredData.map((item)=>(
//          <CountryCard id={item.name.common} countryFlag={item.flags.png} altName={item.flags.alt} countryName={item.name.official}/>   
//       ))}
//     </div>
//     </div>
    
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <input
        type="text"
        id="searchInput"
        placeholder="Search country..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="countries-container">
        {filteredCountries.map((country, index) => (
          <div className="countryCard" key={index}>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
