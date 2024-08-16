"use client";

import { Suspense, useState } from "react";
import { wrapPromise } from "../lib/suspenseFetch";
import { fetchCars } from "../lib/fetchCars";
import CarTypeDropdownSelect from "./components/CarTypeDropdownSelect";
import Button from "@/app/components/Button";
import YearDropdownSelect from "@/app/components/YearDropdownSelect";
import CarType from "./types/CarType";
import Car from "./types/Car";
import Loading from "./components/Loading";
import Link from "next/link";

const carData = wrapPromise(fetchCars);

function CarList() {
  const { Results: cars, uniqueTypesArray: carTypes } = carData.read();

  const [yearFilter, setYearFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Filter</h1>
      <div className="flex justify-between items-center mb-4 gap-5">
        <div className="w-full">
          <YearDropdownSelect
            placeholder="Filter by car year"
            onChange={(e) => setYearFilter(e.target.value)}
            value={yearFilter}
          />
        </div>
        <div className="w-full">
          <CarTypeDropdownSelect
            placeholder="Filter by car type"
            options={carTypes}
            onChange={(e) => setTypeFilter(e.target.value)}
            value={typeFilter}
          />
        </div>
        <Link href={`/result/${typeFilter}/${yearFilter}`}>
          <Button disabled={Boolean(!yearFilter || !typeFilter)}>Next</Button>
        </Link>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Car Types</h2>
        <ul>
          {carTypes.map((type: CarType) => (
            <li key={type.VehicleTypeId} className="text-gray-600">
              {type.VehicleTypeName}
            </li>
          ))}
        </ul>
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
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <CarList />
    </Suspense>
  );
}
