"use client";

import { useState } from "react";
import Link from "next/link";
import CarTypeDropdownSelect from "@/app/components/CarTypeDropdownSelect";
import Button from "@/app/components/Button";
import YearDropdownSelect from "@/app/components/YearDropdownSelect";
import { wrapPromise } from "@/app/lib/suspenseFetch";
import { fetchCars } from "@/app/lib/fetchCars";

const carData = wrapPromise(fetchCars);

const Header = () => {
  const { Results: cars } = carData.read();
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
            options={cars}
            onChange={(e) => setTypeFilter(e.target.value)}
            value={typeFilter}
          />
        </div>
        <Link href={`/result/${typeFilter}/${yearFilter}`}>
          <Button disabled={Boolean(!yearFilter || !typeFilter)}>Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
