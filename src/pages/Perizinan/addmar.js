import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import { Marker, ProviderPropType  } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -7.792556;
const LONGITUDE = 110.3763614;
const LATITUDE_DELTA = 0.10;
const LONGITUDE_DELTA = 0.140;
let id = 0;

class CustomMarkers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView style={styles.map} region={this.state.region}
onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}>
{
      // if state contains marker variable with a valid value, render the marker
      this.state.marker &&
      <MapView.Marker coordinate={this.state.marker} />
}
</MapView>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Tap map to create a marker of random color</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

CustomMarkers.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default CustomMarkers;