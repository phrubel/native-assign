import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/LOGO.jpg')}
        resizeMode="contain"
      />

      {/* back */}
      <View style={styles.secondSpace}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Image
            style={styles.box}
            source={require('../../assets/Box.jpg')}
            resizeMode="contain"
          />
        </View>

        {/* Text area */}
        <View style={styles.textArea}>
          <Text style={styles.title}>Non-Contact Deliveries</Text>
          <Text style={styles.desc}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
        </View>

        {/* Button */}
        <View>
          <Pressable onPress={() => navigation.navigate('Order')}>
            <View style={styles.button}>
              <Text style={styles.order}>Order Now</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <View style={styles.dismiss}>
              <Text style={styles.dismissText}>Dismiss</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a259ff',
  },
  logo: {
    width: 80,
    height: 80,
    padding: 20,
    borderRadius: 50,
    top: 63,
    left: 20,
    // marginTop: 20,
    // marginHorizontal: 20,
  },
  secondSpace: {
    backgroundColor: 'white',
    height: 584,
    width: 400,
    top: 312,
    margin: 8,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  box: {
    width: 50,
    height: 50,
    padding: 20,
    top: 50,
  },
  textArea: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 900,
    fontSize: 34,
    lineHeight: 40,
    padding: 40,
    textAlign: 'center',
    color: 'grey',
  },
  desc: {
    fontSize: 20,
    color: 'grey',
    marginHorizontal: 20,
  },
  button: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#0bce83',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  order: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  dismiss: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dismissText: {
    color: 'grey',
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
