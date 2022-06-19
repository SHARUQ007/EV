import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, TextInput } from 'react-native';
import out from "././../assets/out";
const Item = ({ city,review,rating, station}) => (
  <View style={styles.item}>
    <Text style={styles.textInput}>{city}</Text>
    <Text style={styles.title}>{station}               {rating} ⭐</Text>
    {/* <Text style={styles.title}></Text> */}
    <Text style={styles.title}>Review: {review}</Text>
    {/* <TextInput placeholder={review} style={styles.title} /> */}
   
    <View>
    </View>
  </View>
);


export default function addStations() {
  const renderItem = ({ item }) => (
    <Item city={item.city} rating={item.rating} review = {item.review} station = {item.station} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={out}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    color: "red",
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    // height: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 20,
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
    textAlign: 'center',
  }
});

