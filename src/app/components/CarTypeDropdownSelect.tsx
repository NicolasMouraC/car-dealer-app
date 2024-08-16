import React from "react";
import CarTypeDropdownSelectProps from "../types/CarTypeDropdownSelectProps";

const CarTypeDropdownSelect: React.FC<CarTypeDropdownSelectProps> = ({
  options,
  onChange,
  value,
  placeholder,
}) => {
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
        {options.map((option) => (
          <option key={option.VehicleTypeId} value={option.VehicleTypeId}>
            {option.VehicleTypeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarTypeDropdownSelect;
