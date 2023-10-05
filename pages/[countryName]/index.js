import CountryDetail from "@/components/Countries/country-detail";
import { fetchCountries } from "../fetch-countries/fetch-countries";
function CountryDetails(props) {
  return <CountryDetail country={props.country} />;
}

export default CountryDetails;

export async function getStaticPaths() {
  const countries = await fetchCountries("https://restcountries.com/v3.1/all");

  return {
    fallback: "blocking",
    paths: countries.map((country) => ({
      params: { countryName: country.name.common },
    })),
  };
}

export async function getStaticProps(context) {
  const countryName = context.params.countryName;
  const country = await fetchCountries(`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`);

  return {
    props: {
      country: country[0],
    },
  };
}
