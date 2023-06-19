import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
// import Mapir from 'mapir-react-native-sdk';

export default function Map() {
  const onRegionDidChange = (e: any) => {
    console.info('onRegionDidChange', e.geometry.coordinates);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Mapir
          apiKey={'YOUR_MAPIR_API_KEY'}
          onRegionDidChange={e => onRegionDidChange(e)}
          style={styles.container}>
          <Mapir.Camera
            zoomLevel={13}
            centerCoordinate={[51.422548, 35.732573]}
          />
        </Mapir> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
