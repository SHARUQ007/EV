import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet,Linking } from 'react-native';

import { PricingCard } from 'react-native-elements';


   
   // implemented without image with header




export default function EVStore() {

    const pressHandler = () => {
        Linking.openURL("https://rzp.io/l/3wHf8Os");
      }

  return (

<ScrollView style={styles.container}>
<PricingCard
  color="black"
  title="AC Motor"
  price="Rs.19999"
  info={['1 Year Warranty', 'Free Services', '24/7 Support']}
  button={{ title: ' Buy Now', icon: 'flight-takeoff' }}
  onButtonPress={pressHandler}
/>

<PricingCard
  color="black"
  title="Curtis Controller"
  price="Rs.7999"
  info={['2 Year Warranty', 'Limited Services', '24/7 Support']}
  button={{ title: ' Buy Now', icon: 'flight-takeoff' }}
  onButtonPress={pressHandler}
/>

<PricingCard
  color="black"
  title="EV Charger"
  price="Rs.29999"
  info={['1 Year Warranty', 'Free Services', '24/7 Support']}
  button={{ title: ' Buy Now', icon: 'flight-takeoff' }}
  onButtonPress={pressHandler}
/>

<PricingCard
  color="black"
  title="EV Battery"
  price="Rs.6999"
  info={['1 Year Warranty', 'Limited Services', '24/7 Support']}
  button={{ title: ' Buy Now', icon: 'flight-takeoff' }}
  onButtonPress={pressHandler}
/>
</ScrollView>
  );
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    // },
  });

