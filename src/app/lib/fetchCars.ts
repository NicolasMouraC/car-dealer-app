export async function fetchCars() {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();

  return data;
}
