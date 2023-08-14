export const getAreas = (addresses) => {
    const uniqueAreasSet = new Set(addresses.map((element) => element.AreaDescription));
    const uniqueAreas = Array.from(uniqueAreasSet);
    return uniqueAreas
  };