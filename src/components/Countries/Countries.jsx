import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])


    const handleVisitedCountry = country => {
        console.log('Add this to your visited country');
        // visitedCountries.push(country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)   

    }


    return (
        <div>
            <h2>Countries {countries.length}</h2>
            <div>
                <h4>Visited countries: {visitedCountries.length}</h4>
                <ul className="countries">
                    {
                        visitedCountries.map(country => <li 
                            key={country.cca3}
                           style={{color: black}}
                            >
                            {country.name}
                        </li>)
                    }
                </ul>
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;