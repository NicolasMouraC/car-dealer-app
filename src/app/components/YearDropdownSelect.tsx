import React from "react";
import { getYears } from "../utils";
import YearDropdownSelectProps from "../types/YearDropdownSelectProps";

const YearDropdownSelect: React.FC<YearDropdownSelectProps> = ({
  onChange,
  value,
  placeholder,
}) => {
  const years = getYears();

  return (
    <div className="relative inline-block w-full">
      <select
        value={value}
        onChange={onChange}
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearDropdownSelect;
