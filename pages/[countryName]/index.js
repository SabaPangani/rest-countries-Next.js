import { handler } from "../api/fetch-countries";
import CountryDetail from "@/components/Countries/country-detail";
function CountryDetails(props) {
  return (
    <CountryDetail country={props.country}/>
  );
}

export default CountryDetails;

export async function getStaticPaths() {
  const countries = await handler("https://restcountries.com/v3.1/all");

  return {
    fallback: "blocking",
    paths: countries.map((country) => ({
      params: { countryName: country.name.common },
    })),
  };
}

export async function getStaticProps(context) {
  const countryName = context.params.countryName;
  const countries = await handler("https://restcountries.com/v3.1/all");

  const country = countries.find((country) => country.name.common === countryName);

  if (!country) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      country: country,
    },
  };
}
