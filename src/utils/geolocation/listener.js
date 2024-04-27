import {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

const LocationListener = ({onCoordsReceived}) => {
  useEffect(() => {
    console.log('Listening to location changes');

    const watchId = Geolocation.watchPosition(
      position => {
        console.log('Position', position);
        onCoordsReceived(position.coords.latitude, position.coords.longitude);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 1000},
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return true;
};

export default LocationListener;
