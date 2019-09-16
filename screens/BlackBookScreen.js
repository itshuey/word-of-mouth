import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export default function BlackBookScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          resizeMode='contain'
          style={{width: "100%", height: 1650}}
          source={require('../assets/demos/blackbook.png')}
        />
      </ScrollView>
    </View>
  )
  ;
}

BlackBookScreen.navigationOptions = {
  headerTitle: (<Image
    style={{height:33, width:90, marginTop: 10,}}
    source={require('../assets/icons/yourblackbook.png')}
  />
  ),
  headerRight: (<TouchableOpacity onPress={() => alert('shout!')}>
      <Image
        style={{height:40, width:17, marginRight: 30,}}
        source={require('../assets/icons/bookmark.png')}
      />
    </TouchableOpacity>
  ),
  headerLeft: (<TouchableOpacity onPress={() => alert('shout!')}>
      <Image
        style={{height:40, width:28, marginLeft: 20,}}
        source={require('../assets/icons/bell.png')}
      />
    </TouchableOpacity>
  ),
  headerStyle: {height: 70, backgroundColor: "black"},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
