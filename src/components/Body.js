import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2755504&lng=77.456015&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleClick = () => {
    const newRestaurant = listOfRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(newRestaurant);
    setFilteredRestaurant(newRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h2>Opps!! Looks line you are offline</h2>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex justify-between">
        <div className="m-2 p-1">
          <input
            className="border border-solid py-1 rounded-lg border-black placeholder:text-center placeholder-slate-500"
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1.5 m-1 bg-green-400 rounded-lg"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <div className="flex items-center   ">
          <button
            className="px-4 py-1.5 m-1 bg-violet-400 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filterList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restraunt) => (
          <Link
            key={restraunt.info.id}
            to={"/restaurants/" + restraunt.info.id}
          >
            {restraunt.info.isOpen ? (
              <RestaurantCardPromoted resData={restraunt} />
            ) : (
              <RestaurantCard resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
