import React from 'react';
import { Image, View } from 'react-native';

export default function TabBarIcon(props) {
  return (
    <Image
      style={props.size}
      source={props.focused ? props.invertedImage : props.regularImage}
    />

  );
}
