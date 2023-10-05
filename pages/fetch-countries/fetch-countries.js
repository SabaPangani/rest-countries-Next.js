async function fetchCountries(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    const countries = await res.json();
    return countries;
  } 
  catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}
export default fetchCountries;