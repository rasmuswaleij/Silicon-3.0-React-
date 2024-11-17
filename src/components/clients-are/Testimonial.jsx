import React, { useEffect, useState } from "react";

const Testimonial = ({ item }) => {
  const [ratingSrc, setRatingSrc] = useState("");

  const checkRating = () => {
    if (item.starRating === 4) {
      setRatingSrc("./assets/images/rating4.svg");
    } else {
      setRatingSrc("./assets/images/rating5.svg");
    }
  };

  useEffect(() => {
    checkRating();
  }, []);

  return (
    <div className="card">
      <img src="/assets/images/icon.svg" alt="" className="qotation-image" />
      <div className="flow" style={{ position: "relative", top: "-18px" }}>
        <img src={ratingSrc} alt="" />
        <p>{item.comment}</p>
        <div className="flex-gap">
          <img src={item.avatarUrl} alt="" />
          <div>
            <h2>{item.author}</h2>
            <p>{item.jobRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
