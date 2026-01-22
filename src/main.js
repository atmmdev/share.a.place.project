import "./style.css";

// Modal
import { Modal } from "./UI/modal.js";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

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
