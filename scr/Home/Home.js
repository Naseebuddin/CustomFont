import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fontfamliy from '../constant/fontfamliy';


const Home = () => {
  return (
    <View style={{alignSelf: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={styles.textOneStyle}>
        Whereas recognition of the inherent dignity
      </Text>
      <Text style={styles.textTwoStyle}>
        Whereas recognition of the inherent dignity
      </Text>
      <Text style={styles.textthreeStyle}>
        Whereas recognition of the inherent dignity
      </Text>
      <Text style={styles.textfourStyle}>
        Whereas recognition of the inherent dignity
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textOneStyle: {
    fontSize: 20,
    marginBottom: 12,
    color: 'red',
    fontFamily:fontfamliy.LoraItalic
  },
  textTwoStyle: {
    fontSize: 20,
    marginBottom: 12,
    color: 'green',
    fontFamily:fontfamliy.LoraMedium
  },
  textthreeStyle: {
    fontSize: 20,
    marginBottom: 12,
    color: 'black',
    fontFamily:fontfamliy.LoraSemiBoldItalic
  },
  textfourStyle: {
    fontSize: 20,
    marginBottom: 12,
    color: 'orange',
    fontFamily:fontfamliy.LoraRegular
  },
});
