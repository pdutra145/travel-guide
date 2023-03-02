import { useLoaderData } from "react-router-dom";

const Home = () => {
  const locationInfo = useLoaderData();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export const loader = async () => {
  const response = await fetch("https://restcountries.com/v2/all");
  const data = await response.json();

  let locationInfo = {
    regions: data.map((list) => list.region),
    names: data.map((list) => list.name),
    flags: data.map((list) => list.flag),
    countries: data,
  };

  return locationInfo;
};

export default Home;
