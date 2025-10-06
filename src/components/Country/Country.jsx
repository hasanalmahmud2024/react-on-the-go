import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country.area.area);
    // console.log(Object.values(country.currencies.currencies));
    // console.log(Object.values(country.currencies.currencies)[0].name);

    const handleVisited = ()=> {
        console.log('button clicked');
        
    }
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Official name: {country.name.official}</p>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital.join(', ')}</p>
            <p>Languages: {Object.values(country.languages.languages).join(', ')}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country": "Small Country"}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;


/**
 * 1. inline css (style object)
 * 2. import from file
 * 3.
 */