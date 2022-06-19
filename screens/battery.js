import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { PricingCard } from 'react-native-elements';
import RNSpeedometer from 'react-native-speedometer'
import { Component } from 'react';
import styles from './styles';
import {
  SafeAreaView,
  TextInput
} from 'react-native';

export default function Battery() {
  const pressHandler = () => {
    Linking.openURL("https://rzp.io/l/3wHf8Os");
  }

  return (
    <View>
    
      <PricingCard
        color="black"
        title="Recharge Your Battery"
        price="Rs.999"
        button={{ title: ' Recharge Now', icon: 'flight-takeoff' }}
        onButtonPress={pressHandler}
      />
      <View>
    <SafeAreaView style={styles.container}>
          <TextInput placeholder="Battery Health:" style={styles.textInput} />
          <RNSpeedometer value={85} size={200}/>
        </SafeAreaView>
        </View>
        <View style={styles.containerbox}>
        <TextInput style={styles.text}>History:</TextInput>  
        <TextInput placeholder="Last Charged: Bengaluru " style={styles.text} />
        <TextInput placeholder="5 hrs 45 mins ago " style={styles.text} />
        <TextInput placeholder="480 Kms Remaining " style={styles.text} />
   </View>
    </View>
  );
}

