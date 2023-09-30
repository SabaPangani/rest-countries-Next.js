import Country from "./country";
function CountriesList({ countries }) {
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li>
            <Country key={country.id} name={country.name.common} img={country.flag} common={country.common} official={country.official} nativeName={country.nativeName}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
