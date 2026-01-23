import L from "leaflet";

/**
 * Map class to handle map rendering and updates using Leaflet.js
 * @class
 * @param {Object} coordinates - The initial coordinates to center the map on.
 * @param {number} coordinates.lat - The latitude.
 * @param {number} coordinates.lng - The longitude.
 */
export class Map {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.map = null;
    this.marker = null;
    this.render();
  }

  render() {
    if (this.map) return;
    // Initialize the map
    this.map = L.map("map").setView([this.coordinates.lat, this.coordinates.lng], 13);
    this.marker = L.marker([this.coordinates.lat, this.coordinates.lng]).addTo(this.map);
    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "",}).addTo(this.map);
  }

  update(coordinates) {
    this.coordinates = coordinates;
    if (!this.map) {
      this.render();
      return;
    }
    // Center the map on the new coordinates
    this.map.setView([coordinates.lat, coordinates.lng], 13);
  }
}
