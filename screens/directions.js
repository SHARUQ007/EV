



import MapView,{Marker,Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


    
//   return (

//   );
// }
// const styles = StyleSheet.create({
 
// });



import out from '../assets/out';
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList,Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Direction = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
        setFilteredDataSource(out);
        setMasterDataSource(out);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  }, []);



  const [coordinates,setCoordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      latitude: 28.8023093,
      longitude: 77.031724,
    },
  ]);




  let i=1




  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.city
          ? item.city.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.city.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'black',
        }}
      />
    );
  };

    const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + '\n'+'Title : ' + item.city+'\n'+'Latitude : '+item.latitude+'\n'+'Longitude : '+item.longitude);
   setCoordinates([ {
    latitude: 12.9716,
    longitude: 77.5946,
    },
    {
      latitude: item.latitude,
      longitude: item.longitude,
    }])

  };
 

  return (
<View style={StyleSheet.absoluteFillObject}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerbox}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        {i===0? null:
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />}
      </View>
           
        <MapView style={StyleSheet.absoluteFillObject}
        zoomEnabled= {true}
          zoomTapEnabled = {true}
          
            initialRegion={{
              latitude: 12.9716,
              longitude: 77.5946,
              latitudeDelta: 0.35,
              longitudeDelta: 0.35,}}
         >
          <Marker coordinate={coordinates[0]} />
            <Marker coordinate={coordinates[1]} />
            <Polyline
              coordinates={coordinates}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={['#7F0000']}
              strokeWidth={6}
            />
             <MapViewDirections
              origin={coordinates[0]}
              destination={coordinates[1]}
              apikey="AI..." // insert your API Key here
              strokeWidth={4}
              strokeColor="#111111"
            />
         </MapView>
         
    </SafeAreaView>
    </View>
         


  );
};

const styles = StyleSheet.create({
  containerbox: {
    backgroundColor: 'white',
    zIndex: 2
  },
  itemStyle: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Direction;