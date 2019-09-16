import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/Colors';

export default function ContentPanel(props) {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentText}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'lightgray',
    paddingTop: 20,
    paddingBottom: 20,

  },
  contentText : {
    alignSelf: "center",
  },
});