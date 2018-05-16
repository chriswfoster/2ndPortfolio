import React, { Component } from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"
import ContactForm from "./ContactForm/ContactForm"
import "./contact.css"

class Contact extends Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 33.004086, lng: -96.708479 }}
        >
          {props.isMarkerShown && (
            <Marker position={{ lat: 33.004086, lng: -96.708479 }} />
          )}
        </GoogleMap>
      ))
    )
    return (
      <div className="contact-main">
        <div className="contact-topbar">
          <p> CONTACT </p>
        </div>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={
            <div
              style={{
                height: `30vh`,
                width: `50vw`
              }}
            />
          }
          containerElement={
            <div
              style={{
                height: `30vh`,
                width: `50vw`
              }}
            />
          }
          mapElement={
            <div
              style={{
                height: `30vh`,
                width: `50vw`
              }}
            />
          }
        />
        <ContactForm />
      </div>
    )
  }
}
export default Contact
