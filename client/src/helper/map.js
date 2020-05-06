import { code } from '../../../config/config.js';

const setupMapAPI = () => {
  // Create the script tag, set the appropriate attributes
  let script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${code}&callback=initMap`;
  script.defer = true;
  script.async = true;

  // Attach your callback function to the `window` object
  window.initMap = function() {
    // JS API is loaded and available
  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
}

export default setupMapAPI;