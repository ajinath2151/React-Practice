import React, { useState, useEffect } from 'react';

const LocationDemo = () => {
  const [location, setLocation] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    const requestLocation = async () => {
      try {
        // Request permission to access the user's location
        const permission = await navigator.permissions.query({
          name: 'geolocation',
        });

        if (permission.state === 'granted') {
          // Get the current position if permission is granted
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
            },
            (error) => {
              console.error('Error getting location:', error.message);
            }
          );
        } else if (permission.state === 'denied') {
          // Handle case where the user denies permission
          setPermissionDenied(true);
        }
      } catch (error) {
        console.error('Error requesting location permission:', error.message);
      }
    };

    requestLocation();
  }, []);

  return (
    <h1>
      {permissionDenied ? (
        <p>Permission to access location denied by user.</p>
      ) : location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Requesting location permission...</p>
      )}
    </h1>
  );
};

export default LocationDemo;
