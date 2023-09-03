import { useParams } from "react-router-dom";
import useApihook from "./Apihook";
import Product from "./Product";

const Singleproduct = () => {
  const { prodid } = useParams();
  let data = useApihook();
  return (
    <div>
      {data.map((val) => {
        if (prodid == val.id) {
          return (
            <div
              className="flex border-[1px] border-black  items-center flex-col"
              key={val.id}
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
        } 
      })}
    </div>
  );
};

export default Singleproduct;
