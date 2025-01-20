import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla } = resData.info;
  const { slaString } = sla;

  const data = useContext(UserContext);

  return (
    <div className="m-2 mt-0 p-1 w-[236px] rounded-lg bg-gray-200 hover:bg-gray-400 ">
      <img
        className="object-cover w-[100%] h-44 rounded-lg"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name.substring(0, 24)}</h3>
      <h4>{cuisines.join(",").substring(0, 30)}</h4>
      <h4>{avgRating}</h4>
      <h5>{slaString}</h5>
      <h5>User: {data.loggedInUser}</h5>
    </div>
  );
};

export default RestaurantCard;

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-blue-800 text-white mt-2 ml-3 p-0.5 rounded-lg">
          Open Res
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
