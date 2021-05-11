import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Styles from './Styles';


export default function Header() {
  return (
    <View style={Styles.header}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../images/dexTop.png')}
        resizeMode="cover"
      
      />
      
      <View style={Styles.textView}>
        <Text style={Styles.text}>List:</Text>
      </View>
    </View>
  );
}
