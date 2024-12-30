import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla } = resData.info;
  const { slaString } = sla;

  return (
    <div className="res-card" style={{ background: "#E5DDDD" }}>
      <img
        className="res-logo"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3 className="card-text">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h5>{slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
