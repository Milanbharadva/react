import { Link, useNavigate } from "react-router-dom";
import Showproduct from "./Showproduct";

const ProductList = (props) => {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-2 m-2">
          {props.data.map((val) => {
            return (
              <div
                className="flex border-[1px] border-black  items-center flex-col cursor-pointer"
                key={val.id}
                onClick={() => {
                  nav(`singleproduct/${val.id}`);
                }}
              >
                <img
                  src={val.image}
                  style={{ width: "200px", height: "250px" }}
                  alt=""
                />
                <p>{val.title}</p>
                <p>{val.price}</p>
                <p>{val.description}</p>
                <p>{val.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
