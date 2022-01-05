import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import img from './src/img/bg1.png';
import {Button, Center, NativeBaseProvider} from 'native-base';
const App = () => (
  <View style={styles.container}>
    <View style={{flex: 1}}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
    </View>
    <View style={{flex: 1, borderRadius: 6, backgroundColor: 'red'}}>
      <Text>hhh</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 10,
  },
});

export default App;
