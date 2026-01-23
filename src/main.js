import "./style.css";

// Modal
import { Modal } from "./UI/Modal.js";
import { Map } from "./UI/Map.js";
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
    this.locateUserHandler = this.locateUserHandler.bind(this);
    this.findAddressHandler = this.findAddressHandler.bind(this);

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
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
        if (!this.map) {
          this.map = new Map(coordinates);
        } else {
          this.map.update(coordinates);
        }
      },
      (error) => {
        modal.hide();
        alert("Could not locate you. Please enter an address manually!");
      },
    );
  }

  findAddressHandler() {}
}
new PlaceFinder();
