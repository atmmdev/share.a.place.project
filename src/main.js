import "./style.css";

/**
 * Module imports
 * @module
 */
import { Modal } from "./UI/modal.js";
import { Map } from "./UI/Map.js";
import {
  getCoordsFromAddress,
  getAddressFromCoords,
} from "./Utility/Location.js";
import "leaflet/dist/leaflet.css";

/**
 * Main application class to handle user interactions for locating places.
 * @class
 */
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");
    this.map = null;

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    this.shareBtn.addEventListener("click", this.sharePlaceHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  sharePlaceHandler() {
    const sharedLinkInputElement = document.getElementById("share-link");
    if (!navigator.clipboard) {
      sharedLinkInputElement.select();
      return;
    }

    navigator.clipboard.writeText(sharedLinkInputElement.value).then(() => {
      alert("Copied into clipboard!");
    });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.update(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    this.shareBtn.disabled = false;
    const sharedLinkInputElement = document.getElementById("share-link");
    sharedLinkInputElement.value = `${location.origin}/?address=${encodeURIComponent(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    const modal = new Modal("loading-modal-content", "Loading location...");
    modal.show();

    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };

        const address = await getAddressFromCoords(
          coordinates.lat,
          coordinates.lng,
        );
        modal.hide();
        this.selectPlace(coordinates, address);
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
      this.selectPlace(coordinates, address);
      modal.hide();
    } catch (error) {
      alert(error.message);
    }
  }
}
new PlaceFinder();
