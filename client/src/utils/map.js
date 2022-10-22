import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * @function - checks for if map is already present
 * @params - map id
 * @return - true (if map is present) & false (if map is not present)
 * */
export const mapAlreadyPresent = (mapId) => {
  const leafletMap = document.querySelector(`#${mapId}`);

  return leafletMap.innerHTML !== '';
};

/**
 * @function - initializes a map
 * @params - {coordinates} for the focus of the map, { mapId }
 * @return - leaflet map object
 * */
export const initMap = (mapId, coordinates) => {
  const map = L.map(mapId).setView(coordinates, 13);

  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    minZoom: 3,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);
  return map;
};

/**
 * @function - creates a circle on the map
 * @params - { leaflet map object }, {coordinates} for the circle
 * */
export const createCircle = (map, coordinates) => {
  const circle = L.circle(coordinates, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 800000,
  }).addTo(map);
};
