const CountryData = (props) => {
    const {country,  handleVisitedCountry, handleVisitedFlags} = props;
    console.log('inside country data', handleVisitedCountry, handleVisitedFlags)
    
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;