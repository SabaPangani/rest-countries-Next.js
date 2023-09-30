import CountriesList from "@/components/Countries/countries-list";
import Filter from "../components/Filter/filter";
function HomePage(props) {
  return (
    <>
      <Filter />
      <CountriesList countries={props.countries} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
    return {
      props: {
        countries: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        countries: [],
      },
    };
  }
}

export default HomePage;
