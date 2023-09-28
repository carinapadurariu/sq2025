import React from "react";

export const RecommendCarCard = (props) => {
  const { carName, retweet, imgUrl, percentage } = props.item;
  return (
    <div className="car-page-recommended">
    <div className="recommend__car-card">
      <div className="recommend__car-top">
        <h5>
          <span>
            <i class="ri-refresh-line"></i>
          </span>
          {percentage}% Recommended
        </h5>
      </div>

      <div className="recommend__car-img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="recommend__car-bottom">
        <h4>{carName}</h4>
        <div className="recommend__car-other">
          <div className="recommend__icons">
            <p>
              <i class="ri-repeat-line"></i>
              {retweet}k
            </p>
            <p>
              <i class="ri-settings-2-line"></i>
            </p>
            <p>
              <i class="ri-timer-flash-line"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </div>

    
  );
};

