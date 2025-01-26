import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

import { CDN_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    dispatch(addItem(items));
    console.log(items);
  };

  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="border-gray-200 p-2 m-2 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div>
              <div className="py-2">
                <span>{items.card.info.name}</span>
                <span>
                  - ₹
                  {items.card.info.price
                    ? items.card.info.price / 100
                    : items.card.info.defaultPrice / 100}
                </span>
              </div>
              <div className="text-xs">{items.card.info.description} </div>
            </div>

            <div className="bg-black ml-[42rem] p-1 rounded-lg absolute text-white">
              <button onClick={() => handleAddItem(items)}>Add+</button>
            </div>

            <img src={CDN_URL + items.card.info.imageId} className="w-32 m-1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
