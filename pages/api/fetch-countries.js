export async function handler(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`);
  }
  const countries = await res.json();
  return countries;
}
