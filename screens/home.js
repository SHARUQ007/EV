import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CarItem from '../components/CarItem/index'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  
  return (
    <View style={styles.container}>
      <CarItem navigation={navigation}/>
      <StatusBar style="auto" />
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
});
