

const Country = ({ country }) => {

    if(!country) {
        return (
            <>Country not found....</>
        )
    }

    return (
        <>
            {country.map(c => 
                <ul key={c.name.official} >
                    <li><h3>{c.name.common}</h3></li>
                    <li>capital {c.capital} </li>
                    <li>population {c.population}</li> 
                    <img src={c.flags.png} height='100' alt={`flag of ${c.name.official}`}/>  
                </ul>
            )}
        </>
    )
}
export default Country