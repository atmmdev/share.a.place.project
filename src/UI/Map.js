import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Ensure Leaflet marker assets are bundled (Vite/Vercel)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/**
 * Map class to handle map rendering and updates using Leaflet.js
 * @class
 * @param {Object} coordinates - The initial coordinates to center the map on.
 * @param {number} coordinates.lat - The latitude.
 * @param {number} coordinates.lng - The longitude.
 */
export class Map {
  constructor(coordinates) {
    this.map = null;
    this.marker = null;
    this.render(coordinates);
  }

  render(coordinates) {
    if (this.map) {
      this.update(coordinates);
      return;
    }
    // Initialize the map
    this.map = L.map("map").setView([coordinates.lat, coordinates.lng], 13);
    this.marker = L.marker([coordinates.lat, coordinates.lng]).addTo(this.map);
    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
    }).addTo(this.map);
  }

  update(coordinates) {
    this.coordinates = coordinates;
    if (!this.map) {
      this.render(coordinates);
      return;
    }
    // Center the map on the new coordinates
    this.map.setView([coordinates.lat, coordinates.lng], 13);
    if (this.marker) {
      this.marker.setLatLng([coordinates.lat, coordinates.lng]);
    } else {
      this.marker = L.marker([coordinates.lat, coordinates.lng]).addTo(
        this.map,
      );
    }
  }
}
