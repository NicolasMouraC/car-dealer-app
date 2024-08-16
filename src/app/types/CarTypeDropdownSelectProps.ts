import CarType from "./CarType";

type CarTypeDropdownSelectProps = {
  options: CarType[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  placeholder?: string;
};

export default CarTypeDropdownSelectProps;
