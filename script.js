const options = {
    // Required: API key
    key: '05wHkub3HgCx9eBvBNqesq3BIehBKmZ6', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 32.85924261183605,
    lon: 14.3,
    zoom: -16.743725212902742,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([32.85924261183605, -16.743725212902742])
        .setContent('RH10')
        .openOn(map);
});
