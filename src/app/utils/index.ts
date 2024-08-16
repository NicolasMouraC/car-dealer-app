export const getYears = () => {
  const startYear = 2015;
  const endYear = new Date().getFullYear();
  const yearsArray = [];

  for (let year = startYear; year <= endYear; year++) {
    yearsArray.push(year);
  }

  return yearsArray;
};
