export async function getCoordsFromAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "shared-a-place-project", // Nominatim requires a valid User-Agent
    },
  });

  const data = await response.json();

  if (data.length === 0) {
    throw new Error("Address not found!");
  }

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
}
