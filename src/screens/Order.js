import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Order() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backImage}
        source={require('../../assets/back.jpeg')}
      />

      {/* half one */}
      <View style={styles.secondOrder}>
        <Text style={styles.title}>Boston Lettuce</Text>

        {/* Price text */}
        <View style={styles.price}>
          <Text style={{ fontWeight: 900, fontSize: 24 }}>1.10</Text>
          <Text style={{ fontWeight: 600, fontSize: 20, color: 'grey' }}>
            € / piece
          </Text>
        </View>
        <Text style={styles.gram}>~ 150 gr / piece</Text>

        {/* details Text */}
        <View style={styles.details}>
          <Text style={styles.heading}>Spain</Text>
          <Text style={styles.textContainer}>
            Lettuce is an annual plant of the daisy family, Asteraceae. It is
            most often grown as a leaf vegetable, but sometimes for its stem and
            seeds. Lettuce is most often used for salads, although it is also
            seen in other kinds of food, such as soups, sandwiches and wraps; it
            can also be grilled.
          </Text>
        </View>

        {/* add to cart button */}
        <View style={styles.buttonArea}>
          <View style={styles.icon}>
            <AntDesign name="hearto" size={24} color="black" />
          </View>

          <View style={styles.addToCart}>
            <View style={styles.iconText}>
              <AntDesign name="shoppingcart" size={24} color="white" />
              <Text style={styles.buttonText}>Add To Cart</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    width: '100%',
    height: '45%',
  },
  secondOrder: {
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    // marginBottom: '10%',
    height: '65%',
    marginTop: '-10%',
  },
  title: {
    padding: 20,
    margin: 15,
    fontSize: 24,
    fontWeight: 700,
  },
  price: {
    flexDirection: 'row',
    marginLeft: 35,
    gap: 10,
  },
  gram: {
    color: '#0bce83',
    marginLeft: 35,
    fontWeight: 600,
    marginTop: 10,
    fontSize: 18,
  },
  details: {
    padding: 20,
    margin: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 20,
    textAlign: 'justify',
    color: 'grey',
    textAlignVertical: 'center',
  },
  buttonArea: {
    flexDirection: 'row',
    padding: 30,
    margin: 5,
    justifyContent: 'space-around',
  },
  icon: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  addToCart: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#0bce83',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '65%',
  },
  iconText: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
