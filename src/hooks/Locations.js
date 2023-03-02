import { useContext } from "react";
import { LocationsContext } from "../context/Locations";

const useLocations = (countries) => {
  const [locationInfo, dispatch] = useContext(LocationsContext);

  function updateLocation() {
    dispatch({
      type: "update-locations",
      countries,
    });

    dispatch({ type: "update-countries", countries });

    dispatch({ type: "update-user-location" });
  }

  updateLocation();

  return { locationInfo };
};

export default useLocations;
