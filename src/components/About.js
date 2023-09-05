import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCarBattery, faHandshake, faRoute, faStreetView, faTruck } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'



 export const About = () => {

  return (
    <>
      <div className="container-about-page">
        <div className="text-zone">
          <h1 className="about-style-title">About The Services</h1>
          <h2 className="sub-title">Get to know more</h2>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCar} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faRoute} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faTruck} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHandshake} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCarBattery} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faStreetView} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
   
    </>
  )
}
