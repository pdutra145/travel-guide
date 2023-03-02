export const findUniqRegions = (regionList) => {
  const result = Array.from(
    new Set(regionList.filter((region) => region !== "").sort())
  );
  // console.log(result)
  return result;
};
