// Initialize and add the map
let map1;

async function initMap() {
  // The location
  const position = { lat: 50.121368182791876, lng: 8.675876530600387 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  // The map, centered at Uluru
  map1 = new Map(document.getElementById('mapx'), {
    zoom: 16,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });

  // The marker, positioned at Apartment
  const marker = new AdvancedMarkerElement({
    map: map1,
    position: position,
    title: 'Projektwohnung',
  });
}

initMap();
