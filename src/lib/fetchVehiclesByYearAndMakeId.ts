export async function fetchVehiclesByYearAndMakeId(
  makeId: number,
  modelyear: number,
) {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${modelyear}?format=json`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();

  return data;
}
