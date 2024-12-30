import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

let listOfRestaurantJS = [
  {
    info: {
      id: "134126",
      name: "New Zam Zam Restaurant",
      cloudinaryImageId: "l6vlz5qwrlfmdkyivomd",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Mughlai",
        "Indian",
        "Tandoor",
        "Chinese",
        "Beverages",
      ],
      avgRating: 4.1,
      sla: {
        deliveryTime: 36,
      },
    },
  },
  {
    info: {
      id: "501801",
      name: "Amer Bakery Hut",
      cloudinaryImageId: "kgjzswkwmvj646ocuynb",
      costForTwo: "₹350 for two",
      cuisines: [
        "Bakery",
        "North Indian",
        "Chinese",
        "Fast Food",
        "Mexican",
        "Snacks",
        "Beverages",
      ],
      avgRating: 3.5,
      sla: {
        deliveryTime: 14,
      },
    },
  },
];

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2755504&lng=77.456015&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

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

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restraunt) => (
          <Link
            key={restraunt.info.id}
            to={"/restaurants/" + restraunt.info.id}
          >
            <RestaurantCard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
