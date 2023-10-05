import fetchCountries from "./fetch-countries/fetch-countries";
import { useState } from "react";
import dynamic from "next/dynamic";
const LazyFilter = dynamic(() => import("../components/Filter/filter"));

const LazyCountriesList = dynamic(() =>
  import("../components/Countries/countries-list")
);
function HomePage(props) {
  const [countries, setCountries] = useState(props.countries);
  const updateCountriesHandler = (countries) => {
    setCountries(countries);
  };
  return (
    <>
      <LazyFilter
        onUpdateCountries={updateCountriesHandler}
        countries={props.countries}
      />
      <LazyCountriesList countries={countries} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const countries = await fetchCountries(
      "https://restcountries.com/v3.1/all"
    );

    return {
      props: {
        countries: countries,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        countries: [],
      },
    };
  }
}

export default HomePage;
