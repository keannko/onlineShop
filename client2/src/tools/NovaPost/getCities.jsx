export const getCities = (addresses, area) => {
    const res = addresses.filter((el) => el.AreaDescription === area);
    const result = res.map(el => el.Description)
    return result;
  };