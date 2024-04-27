import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LocationListener from './src/utils/geolocation/listener';

const App = () => {
  const [gps, setGPS] = useState({ lat: null, lng: null });

  const handleCoordsReceived = (lat, lng) => {
    setGPS((prevGPS) => ({
      ...prevGPS,
      lat,
      lng,
    }));
    console.log('GPS:', { lat, lng });
  };

  return (
    <View style={styles.root}>
      <LocationListener onCoordsReceived={handleCoordsReceived} />

      <Text>
        Latitude: {gps.lat} Longitude: {gps.lng}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
