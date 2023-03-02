import { createContext, useReducer } from "react";
import { findUniqRegions } from "../utils/findUniqRegions";

const locationReducer = (state, actions) => {
  console.log(actions.type);
  console.log(typeof actions.countries);
  switch (actions.type) {
    case "update-locations":
      let updatedLocationInfo = {};
      actions.countries.forEach((info) => {
        const { region, name, flag } = info;
        updatedLocationInfo = {
          regions: [...state.regions, region],
          names: [...state.names, name],
          flags: [...state.flags, flag],
        };
        updatedLocationInfo.regions = findUniqRegions(
          updatedLocationInfo.regions
        );
      });
      return updatedLocationInfo;
    case "update-countries":
      return { ...state, countries: actions.countries };
    case "update-user-location":
      let userLocation;
      navigator.geolocation.getCurrentPosition(function (position) {
        userLocation = position.coords;
      });
      return { ...state, userLocation };

    default:
      throw new Error("invalid case type");
  }
};

export const LocationsContext = createContext({
  locationInfo: {},
});

const Locations = (props) => {
  const [locationInfo, dispatch] = useReducer(locationReducer, {
    regions: [],
    names: [],
    flags: [],
    countries: [],
    userLocation: [],
  });

  return (
    <LocationsContext.Provider value={[locationInfo, dispatch]}>
      {props.children}
    </LocationsContext.Provider>
  );
};

export default Locations;
