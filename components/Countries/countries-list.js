import Country from "./country";
import classes from "./countries-list.module.scss";
function CountriesList({ countries }) {
  return (
    <div className={classes.container}>
      <ul className={classes.wrapper}>
        {countries.length > 1 &&
          countries.map((country) => (
            <li>
              <Country
                name={country.name.common}
                img={country.flags.png}
                capital={country.capital}
                population={country.population}
                region={country.region}
              />
            </li>
          ))}
        {countries.length === 1 && (
          <Country
            name={countries.name.common}
            img={countries.flags.png}
            capital={countries.capital}
            population={countries.population}
            region={countries.region}
          />
        )}
        {countries.length <= 0 && (
          <p>No country found...</p>
        )}
      </ul>
    </div>
  );
}

export default CountriesList;
