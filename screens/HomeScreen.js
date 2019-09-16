import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import ContentPanel from '../components/ContentPanel'
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

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  let main = (<Image
    resizeMode='contain'
    style={{width: "100%", height: 1650}}
    source={require('../assets/demos/sphere.jpeg')}
  />);

  let rightButton = (<Image
    resizeMode='contain'
    style={{width: "100%", height: 800}}
    source={require('../assets/demos/shout.jpeg')}
  />
  );

  let dailyButton = (<Image
    resizeMode='contain'
    style={{width: "100%", height: 800}}
    source={require('../assets/demos/daily.jpeg')}
  />
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {main}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: (<Image
    style={{height:33, width:90, marginTop: 10,}}
    source={require('../assets/icons/title.png')}
  />
  ),
  headerLeft: (<TouchableOpacity onPress={() => alert('blackout!')}>
      <Image
        style={{height:50, width:50, marginLeft: 20,}}
        source={require('../assets/icons/logoblack.png')}
      />
    </TouchableOpacity>
  ),
  headerRight: (<TouchableOpacity onPress={() => alert('shout!')}>
      <Image
        style={{height:50, width:50, marginRight: 20,}}
        source={require('../assets/icons/shouticon.png')}
      />
    </TouchableOpacity>
  ),
  headerStyle: {height: 70}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
