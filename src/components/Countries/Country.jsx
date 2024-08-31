import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country)
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        // setVisited(true)
        // toggle
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color : visited ? 'Purple' : 'black'}}>Name: {name?.common}</h3>        
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Country code: <small>{cca3}</small></p>
            <button onClick={handleVisitedCountry}>Mark Visited</button>
            <button onClick={()=> handleVisited(country)}>{visited ? 'Visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country.'} */}
            {visited ? 'I have visited this country.': 'I went to go'}

        </div>
    );
};

export default Country;