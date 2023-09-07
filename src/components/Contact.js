import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const Contact = () => {
  const refForm = useRef

  return (
    <>
      <div className="container-contact-page">
        <h1>
          Contact Me
        </h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book.
      </p>
      <div className="contact-form">
        <div className="text-zone">
        </div>
        <div className="info-map" >
          Nitro Services,
          <br />
          Romania,
          <br />
          Str. Frunzisului 168 <br/>
          Cluj-Napoca <br/>
          <span className="span-email-color">nitroservices@gmail.com</span>

        </div>
        <form>
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input placeholder="Subject" className="subject-lenght" type="text" name="subject" required />
            </li>
            <li>
              <textarea placeholder="Message" name="message" required></textarea>
            </li>
            <input type="submit" className="flat-button" value="SEND" />
          </ul>
        </form> 
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>
                Main Point for Target
              </Popup>

            </Marker>
          </MapContainer>
      </div>
      </div>
    </>
  )
}

export default Contact