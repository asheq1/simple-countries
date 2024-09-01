import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setFlags] = useState([]);


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

    const handleVisitedFlags = flag => {
        console.log('Flags added')
        const newVisitedCountries = [...visitedFlags, flag]
        setFlags(newVisitedCountries)
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h2>Countries {countries.length}</h2>
            {/* visited countries  */}
            <div>
                <h4>Visited countries: {visitedCountries.length}</h4>
                <ul className="countries">
                    {
                        visitedCountries.map(country => <li 
                            key={country.cca3}  
                            >
                            {country.name.common}
                        </li>)
                    }
                </ul>
            </div>
            {/* flag countries  */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* countries  */}
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        country={country}
                        handleVisitedFlags={handleVisitedFlags}
                        handleVisitedCountry={handleVisitedCountry}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;