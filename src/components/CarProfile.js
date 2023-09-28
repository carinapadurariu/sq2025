import {React, useEffect} from 'react';
import videoCar2 from '../assets/img/abstract2.mp4'
import 'remixicon/fonts/remixicon.css'; 
import SingleCard from './SingleCard';
import { MileChart }  from './MileChart';
import CarStatsChart from './CarStatsChart';
import carImg1 from '../assets/img/mercedes-1.png'
import { RecommendCarCard } from './RecommendCarCard';
// import { recommendCars } from './recommendCarsData';

const carObj = {
  title: 'Total Cars',
  totalNumber:750,
  icon:'ri-roadster-line'
}


const tripObj = {
  title: 'Daily Tips',
  totalNumber:1654,
  icon:'ri-steering-fill'
}

const clientObj = {
  title: 'Clients Annually',
  totalNumber:'23k',
  icon:'ri-user-2-line'
}

const distanceObj = {
  title: 'Kilometers Daily',
  totalNumber:2167,
  icon:'ri-timer-flash-line'
}

export const CarProfile = () => {

  useEffect(() => {
   
    window.scrollTo(0, 0);

 }
 )



  return (
    <div className="carProfile">
       <video autoPlay loop muted className="video-car">
          <source src={videoCar2} type="video/mp4" />
        </video>
    <div className="car-wrapper">
    <div className="car-cards">
    <SingleCard item={carObj} />
    <SingleCard item={tripObj} />
    <SingleCard item={clientObj} />
    <SingleCard item={distanceObj} />
    </div>

    <div className="statics">
    <div className="stats">
      <h3 className="stats-title">Miles Statistics</h3>
      <MileChart />
    </div>

    <div className="stats">
      <h3 className="stats-title">Car Statistics</h3>
      <CarStatsChart />
    </div>
    </div>
    <div className="recommend-cars-wrapper">
      {
        // recommendCars.map(item=> <RecommendCarCard item={item} key={item.id} />)
      }
      <div className="recommend-car-card">
        <div className="recommend-car-top">
          <h5>
            <span>
            <i class="ri-refresh-line"></i>74% Recommended
            </span>
          </h5>
        </div>
        <div className="recommended-car-img">
          <img src={carImg1} alt="" />
        </div>
        <div className="recommended-car-bottom">
          <h4>Bmw</h4>
          <div className="recommended-car-other">
            <div className="recommend-icons">
            <p>
          
                <i class="ri-repeat-2-line"></i>
              130k
            </p>
            <p>
              <span>
                <i class="ri-timer-line"></i>
              </span>
            </p>
            </div>
         </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};


