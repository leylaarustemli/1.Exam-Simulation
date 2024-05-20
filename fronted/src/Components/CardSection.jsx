import React, { useContext, useState } from "react";
import "./CardSection.css";
import { Link } from "react-router-dom";
import MainContext from "../Context/Context";
const CardSection = () => {
  const [inpVal, setInpVal] = useState("");
  const { data, addToBasket } = useContext(MainContext);
  const [sortBy, setSortBy] = useState(null);
  return (
    <div className="cardsection">
      <div className="container">
        <input
          value={inpVal}
          onChange={(e) => {
            setInpVal(e.target.value);
          }}
          type="text"
          placeholder="Search"
        />
        <div className="price">
          <button onClick={() => setSortBy({ field: "title", asc: true })}>
            A-Z
          </button>
          <button onClick={() => setSortBy({ field: "title", asc: false })}>
            Z-A
          </button>
          <button onClick={() => setSortBy({ field: "price", asc: true })}>Hign Price</button>
          <button onClick={() => setSortBy({ field: "price", asc: false })}>Low Price</button>
          <button onClick={() => setSortBy(null)}>Default</button>
        </div>

        <div className="cardss">
          {data
            .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc == true) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
            .map((item, index) => (
              <div className="cardd">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <p>{item.category}</p>
                <p>
                  {item.price} <i class="fa-solid fa-arrow-right"></i>
                </p>
                <div className="buttons">
                  <button
                    onClick={() => {
                      addToBasket(item._id);
                    }}
                    id="basket"
                  >
                    basket
                  </button>
                  <Link to={`/detail/${item._id}`} id="detail">
                    detail
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
