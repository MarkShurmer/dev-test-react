const getSortedCountries = (countries) => {
  if (!countries) return undefined;

  return countries.sort((lhs, rhs) => {
    const lhsPopulation = lhs.population || 0;
    const rhsPopulation = rhs.population || 0;

    if (lhsPopulation > rhsPopulation) return -1;
    if (rhsPopulation > lhsPopulation) return 1;

    // must be equal , so check name
    if (lhs.name < rhs.name) return -1;
    if (rhs.name < lhs.name) return 1;

    return 0;
  });
};

export default getSortedCountries;
