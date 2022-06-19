import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import MapView,{Marker} from 'react-native-maps';
import out from "../assets/out";


import { PricingCard } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
export default function Stations() {
  const initialRegion ={
    latitude: 20.5937,
  longitude: 78.9629,
  // latitudeDelta: 0.0922,
  // longitudeDelta: 0.0421,
}
  const mapData = out.map((item) => {
    return {
      latitude: item.latitude,
      longitude: item.longitude,
      // temp: item.temperature,
      station: item.station,
      // humidity: item.humidity,
      // pressure: item.pressure
    };
  });
  const mapConfig = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5
  };
return (
  <View style={StyleSheet.absoluteFillObject}>
  <MapView style={StyleSheet.absoluteFillObject}
  zoomEnabled= {true}
    zoomTapEnabled = {true}
    // zoomControlEnabled={true}
      initialRegion={{
    latitude: 20.5937,
    longitude:  78.9629,
    latitudeDelta: 20,
    longitudeDelta: 20,}}
   >
{mapData.map((data,i) =>{
        if(data.station === "Home Station"){
          return(
          <Marker coordinate={data} key={i}
            // icon ={{uri:image1}}
            pinColor = "yellow"
          />
        )
        }
        if(data.station === "Power Station") {
          return(
          <Marker coordinate={data} key={i}
            // icon ={{uri:image1}}
            pinColor = "red"
          />
          )
        }
       })}
    <Marker coordinate={initialRegion} title='Marker'
    pinColor='orange' />
   </MapView>
  <View style={{ position: 'absolute', top: 100, left: 50 }}/>
  <View style={styles.bottomView}>
    <TextInput style={styles.textInput}>Legends:</TextInput>
    <TextInput style={styles.text}>Home Charging Stations    : Red Marker</TextInput>
    <TextInput style={styles.text}>Power Charging Stations   : Orange Marker</TextInput>
    <TextInput style={styles.text}>Repair & Service Stations : Yellow Marker</TextInput>
  
  </View>
</View>
);
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomView: {
    width: '100%',
    
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  text: {
  

    fontSize: 15,
    fontWeight: 'bold',
    padding : 3,
    backgroundColor: 'white',
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding : 3,
    backgroundColor: 'black',
    color:'white',
    width: '100%',
    // textAlign: 'center',
  },
});