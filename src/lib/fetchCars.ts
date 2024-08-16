import CarType from "@/app/types/CarType";

export async function fetchCars() {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();

  const uniqueTypesSet = new Set<string>();

  data.Results.forEach((car: CarType) => {
    const key = `${car.VehicleTypeId}-${car.VehicleTypeName}`;
    uniqueTypesSet.add(key);
  });

  const uniqueTypesArray = Array.from(uniqueTypesSet).map((key) => {
    const [VehicleTypeId, VehicleTypeName] = key.split("-");
    return { VehicleTypeId: parseInt(VehicleTypeId, 10), VehicleTypeName };
  });

  data.uniqueTypesArray = uniqueTypesArray;

  return data;
}
