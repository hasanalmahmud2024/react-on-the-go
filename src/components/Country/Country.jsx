import React from 'react';

const Country = ({country}) => {
    console.log(country);
    // console.log(Object.values(country.currencies.currencies));
    // console.log(Object.values(country.currencies.currencies)[0].name);
    
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Official name: {country.name.official}</p>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital.join(', ')}</p>
            <p>Languages: {Object.values(country.languages.languages).join(', ')}</p>
        </div>
    );
};

export default Country;