import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Covid() {
  return (
    <View style={styles.container}>
      <View style={styles.firstHalf}>
        {/* menu icon */}
        <View style={styles.menuIcon}>
          <Ionicons name="menu-outline" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>

        {/* title & dropdown */}
        <View style={styles.title}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: 'white' }}>
            Covid-19
          </Text>
          <View style={styles.dropdown}>
            <AntDesign name="flag" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 700 }}>USA</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </View>
        </View>

        {/* Covid info */}
        <View style={styles.textArea}>
          <Text style={styles.titleText}>Are you felling sick? </Text>
          <Text style={styles.detailsText}>
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
        </View>

        {/* Button */}
        <View style={styles.buttonArea}>
          <Pressable style={styles.callBtn}>
            <View style={styles.IconicText}>
              <Ionicons name="call" size={30} color="white" />
              <Text style={styles.btnText}>Call Now</Text>
            </View>
          </Pressable>
          <Pressable style={styles.smsBtn}>
            <View style={styles.IconicText}>
              <FontAwesome5 name="sms" size={30} color="white" />
              <Text style={styles.btnText}>Send Sms</Text>
            </View>
          </Pressable>
        </View>
      </View>
      {/* Second half */}
      <Text style={styles.pre}>Prevention</Text>
      <View style={styles.prevenArea}>
        <View style={{ padding: 20 }}>
          <Image
            style={{ height: 90, width: 90 }}
            resizeMode="contain"
            source={require('../../assets/XMLID 80.jpg')}
          />
          <Text>Avoid close contact</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Image
            style={{ height: 90, width: 90 }}
            resizeMode="contain"
            source={require('../../assets/XMLID 15.jpg')}
          />
          <Text>Avoid close contact</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Image
            style={{ height: 90, width: 90 }}
            resizeMode="contain"
            source={require('../../assets/Group.jpg')}
          />
          <Text>Avoid close contact</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#56549E',
          height: 120,
          width: 350,
          margin: 25,
          borderRadius: 55 / 2,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstHalf: {
    backgroundColor: '#473f97',
    height: 430,
    width: 'auto',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  menuIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    margin: 5,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 4,
    padding: 10,
    borderRadius: 50,
  },
  textArea: {
    padding: 20,
    margin: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
  },
  detailsText: {
    fontSize: 17,
    color: '#cecbef',
    textAlign: 'justify',
    lineHeight: 20,
    padding: 5,
  },
  buttonArea: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
  callBtn: {
    backgroundColor: '#ff4c58',
    width: 185,
    height: 55,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  IconicText: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 24,
    fontWeight: 600,
    color: '#fff',
  },
  smsBtn: {
    backgroundColor: '#4c79ff',
    width: 185,
    height: 55,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

  // second half
  pre: {
    margin: 10,
    padding: 10,
    fontSize: 24,
    fontWeight: 700,
  },
  prevenArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    margin: 5,
  },
});
