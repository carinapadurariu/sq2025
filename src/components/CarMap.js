import React, { useEffect, useRef, useState } from 'react';

export const CarMap=()=>{
  const mapContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [searchedLocationMarker, setSearchedLocationMarker] = useState(null);
  const [markers, setMarkers] = useState({ gas_station: [], car_repair: [], itp: [] });
  const [searchRadius, setSearchRadius] = useState(1000);

  const iconMapping = {
    gas_station: 'gas-station.png',
    car_repair: 'car-repair.png',
    itp: 'car.png'
  };

  const createInfoWindow = (place) => {
    let content = '<div style="width:200px;">';

    if (place.name) content += `<strong>${place.name}</strong>`;
    if (place.formatted_address) content += `<br>${place.formatted_address}`;
    if (place.formatted_phone_number) content += `<br>Phone: ${place.formatted_phone_number}`;
    if (place.website) content += `<br>Website: <a href="${place.website}" target="_blank">${place.website}</a>`;
    if (place.rating) content += `<br>Rating: ${place.rating}`;
    if (place.opening_hours && place.opening_hours.isOpen !== undefined) content += `<br>Open now: ${place.opening_hours.isOpen() ? 'Yes' : 'No'}`;

    content += '</div>';

    return new window.google.maps.InfoWindow({
      content
    });
  };

  const showRoute = (routeIndex) => {
    directionsRenderer.setRouteIndex(routeIndex);
  };

  const toggleNearbyPlaces = (type) => {
    if (markers[type].length > 0) {
      markers[type].forEach(marker => marker.setMap(null));
      setMarkers({ ...markers, [type]: [] });
      if (directionsRenderer) {
        directionsRenderer.setDirections({ routes: [] });
      }
    } else {
      const service = new window.google.maps.places.PlacesService(map);

      const callback = (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const newMarkers = results.map(result => {
            const marker = new window.google.maps.Marker({
              position: result.geometry.location,
              map: map,
              icon: {
                url: `${process.env.PUBLIC_URL}/${iconMapping[type]}`,
                scaledSize: new window.google.maps.Size(32, 32)
              }
            });

            marker.addListener("click", () => {
              service.getDetails({ placeId: result.place_id }, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                  const infoWindow = createInfoWindow(place);
                  infoWindow.open(map, marker);
                }
              });
              handleMarkerClick(result.geometry.location);
            });

            return marker;
          });
          setMarkers({ ...markers, [type]: newMarkers });
        }
      };

      let request;

      if (type === 'itp') {
        request = {
          location: currentLocation,
          radius: searchRadius,
          query: 'ITP'
        };
        service.textSearch(request, callback);
      } else {
        request = {
          location: currentLocation,
          radius: searchRadius,
          type: [type]
        };
        service.nearbySearch(request, callback);
      }
    }
  };

  const handleMarkerClick = (destination) => {
    const request = {
      origin: currentLocation,
      destination: destination,
      travelMode: 'DRIVING',
      provideRouteAlternatives: true,
    };

    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      } else {
        alert('Directions request failed due to ' + status);
      }
    });
  };

  useEffect(() => {
    // Function to dynamically load Google Maps script
    const loadGoogleMapScript = () => {
      return new Promise(resolve => {
        if (document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]')) {
          resolve();
          return;
        }
  
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAGCoKCipXqAJmyn4EW6315ezUuV8LuvcU&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };
  
    const initializeMap = () => {
      if (window.google && window.google.maps) {
        const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
          zoom: 8,
          center: { lat: 46.770439, lng: 23.591423 },
        });
  
        setMap(mapInstance);
        setDirectionsService(new window.google.maps.DirectionsService());
        setDirectionsRenderer(new window.google.maps.DirectionsRenderer({
          map: mapInstance,
          suppressMarkers: true,
        }));
  
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const loc = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setCurrentLocation(loc);
  
            if (mapInstance) {
              const currentLocationMarker = new window.google.maps.Marker({
                position: loc,
                map: mapInstance,
              });
              currentLocationMarker.setMap(mapInstance);
              mapInstance.setCenter(loc);
              mapInstance.setZoom(12);
            }
          });
        }
      } else {
        console.error("Google Maps API not loaded yet.");
      }
    };
  
    if (!window.google || !window.google.maps) {
      loadGoogleMapScript().then(() => {
        if (window.google && window.google.maps) {
          initializeMap();
        }
      });
    } else {
      initializeMap();
    }
  }, []);
  

  useEffect(() => {
    if (map && currentLocation) {
      const autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current, { types: ['gas_station', 'car_repair'] });
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        if (!place.geometry) {
          alert('No details available for input: ' + place.name);
          return;
        }

        if (searchedLocationMarker) {
          searchedLocationMarker.setMap(null);
        }

        const validTypes = ['gas_station', 'car_repair', 'itp'];

        let locationType = place.types.find(type => validTypes.includes(type));

        if (place.name.toLowerCase().includes('itp')) {
          locationType = 'itp';
        }
        if (!locationType) {
          alert('Please select a valid location type (gas station, car repair, itp)');
          return;
        }

        const iconUrl = locationType ? `${process.env.PUBLIC_URL}/${iconMapping[locationType]}` : '';

        const newSearchedLocationMarker = new window.google.maps.Marker({
          position: place.geometry.location,
          map: map,
          icon: {
            url: iconUrl,
            scaledSize: new window.google.maps.Size(32, 32)
          }
        });
        newSearchedLocationMarker.addListener("click", () => {
          const infoWindow = createInfoWindow(place);
          infoWindow.open(map, newSearchedLocationMarker);
        });
        newSearchedLocationMarker.setMap(map);
        setSearchedLocationMarker(newSearchedLocationMarker);

        const request = {
          origin: currentLocation,
          destination: place.geometry.location,
          travelMode: 'DRIVING',
          provideRouteAlternatives: true,
        };

        directionsService.route(request, (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
          } else {
            alert('Directions request failed due to ' + status);
          }
        });
      });
    }
  }, [map, currentLocation, directionsService]);

  return (
    <div className="App">
      <div id="controls" 
  style={{ 
    zIndex: 1, 
    position: 'absolute', 
    top: 40, 
    left: 10, 
    background: 'white', 
    padding: 20, 
    borderRadius: '8px', 
    boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
    marginTop: '100px' }}> 
       
        <div style={{ marginBottom: 20 }}>
          <input
            type="range"
            min="1000"
            max="10000"
            step="1000"
            value={searchRadius}
            onChange={(e) => setSearchRadius(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'black' }}>
            <span>Radius:</span>
            <span>{searchRadius} meters</span>
          </div>
        </div>
  
        <div style={{ marginBottom: 20 }}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for a location (gas station, car repair, itp)"
            style={{ padding: '12px', borderRadius: '8px', width: '100%' }}
          />
        </div>
  
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: 20 }}>
          <button
            onClick={() => toggleNearbyPlaces('gas_station')}
            style={{
              padding: '12px 15px',
              borderRadius: '8px',
              background: '#E6EFFF',
              border: 'none',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Gas Stations
          </button>
          <button
            onClick={() => toggleNearbyPlaces('car_repair')}
            style={{
              padding: '12px 15px',
              borderRadius: '8px',
              background: '#E6EFFF',
              border: 'none',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Car Repair
          </button>
          <button
            onClick={() => toggleNearbyPlaces('itp')}
            style={{
              padding: '12px 15px',
              borderRadius: '8px',
              background: '#E6EFFF',
              border: 'none',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ITP
          </button>
        </div>
  
        <div>
          {routes.map((route, index) => (
            <button
              key={index}
              onClick={() => showRoute(index)}
              style={{
                padding: '12px 15px',
                borderRadius: '8px',
                background: '#E6EFFF',
                border: 'none',
                boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: 15
              }}
            >
              Route {index + 1}: {route.summary} ({route.legs[0].duration.text}, {route.legs[0].distance.text})
            </button>
          ))}
        </div>
  
      </div>
      <div ref={mapContainerRef} id="map" style={{ width: '100%', height: '80vh' }}></div>
    </div>
  );
  
  
}



