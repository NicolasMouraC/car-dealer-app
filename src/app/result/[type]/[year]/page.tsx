import { fetchVehiclesByYearAndMakeId } from "@/app/lib/fetchVehiclesByYearAndMakeId";
import { getYears } from "@/app/utils";
import Loading from "@/app/components/Loading";
import { Suspense } from "react";
import { fetchCars } from "@/app/lib/fetchCars";
import FilteredModelsType from "@/app/types/FilteredModelsType";
import ResultParams from "@/app/types/ResultsParams";

const ResultPage = async ({ params }: ResultParams) => {
  const { type, year } = params;
  const response = await fetchVehiclesByYearAndMakeId(type, year);
  const cars = response.Results;

  return (
    <div className="p-4">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Car Types</h2>
          <p className="text-gray-600">Car type</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car: FilteredModelsType, index: number) => (
            <div key={index} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{car.Model_Name}</h2>
              <p className="text-gray-600">{car.Make_Name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const response = await fetchCars();
  const { Results } = response;
  const years = getYears();

  const paths = Results.map((item: any) =>
    years.map((year) => ({
      type: item.MakeId,
      year: year.toString(),
    }))
  );

  return paths;
};

export default function Results({ params }: ResultParams): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <ResultPage params={params} />
    </Suspense>
  );
}
