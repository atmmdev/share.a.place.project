import "./style.css";

/**
 * Module imports
 * @module
 */
import { Modal } from "./UI/Modal.js";
import { Map } from "./UI/Map.js";
import { getCoordsFromAddress } from "./Utility/Location.js";
import "leaflet/dist/leaflet.css";

/**
 * Main application class to handle user interactions for locating places.
 * @class
 */
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    this.map = null;

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  selectPlace(coordinates) {
    if (this.map) {
      this.map.update(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    const modal = new Modal("loading-modal-content", "Loading location...");
    modal.show();

    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();

        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };

        this.selectPlace(coordinates);
      },
      (error) => {
        modal.hide();
        alert("Could not locate you. Please enter an address manually!");
      },
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;

    if (!address || address.trim().length === 0) {
      alert("Please enter a valid address!");
      return;
    }

    const modal = new Modal("loading-modal-content", "Loading location...");
    modal.show();

    try {
      const coordinates = await getCoordsFromAddress(address);
      console.log(coordinates);
      this.selectPlace(coordinates);
      modal.hide();
    } catch (error) {
      alert(error.message);
    }
  }
}
new PlaceFinder();
