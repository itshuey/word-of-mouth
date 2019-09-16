import React from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          resizeMode='contain'
          style={{width: "100%", height: 805}}
          source={require('../assets/demos/profilepage.jpeg')}
        />
        </ScrollView>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Profile',
  headerStyle: {height: 70},
  headerTitle: (<Image
    style={{height:35, width:100, marginTop: 5,}}
    source={require('../assets/icons/searchbar.png')}
  />
  ),
  headerLeft: (<TouchableOpacity onPress={() => alert('blackout!')}>
      <Image
        style={{height:50, width:40, marginLeft: 20,}}
        source={require('../assets/icons/seethroughgrapevine.png')}
      />
    </TouchableOpacity>
  ),
  headerRight: (<TouchableOpacity onPress={() => alert('shout!')}>
      <Image
        style={{height:55, width:35, marginRight: 20,}}
        source={require('../assets/icons/whisper.png')}
      />
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
