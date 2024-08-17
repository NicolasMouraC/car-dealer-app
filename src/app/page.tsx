import Car from "@/app/types/Car";
import { wrapPromise } from "@/app/lib/suspenseFetch";
import { fetchCars } from "@/app/lib/fetchCars";

const carData = wrapPromise(fetchCars);

const HomePage = () => {
  const { Results: cars } = carData.read();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Filter</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Car Types</h2>
        <p className="text-gray-600">Car type</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car: Car) => (
          <div key={car.MakeId} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{car.MakeName}</h2>
            <p className="text-gray-600">{car.VehicleTypeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
