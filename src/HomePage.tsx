import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import React from 'react';
import {RecommendedSongs} from './components/RecommendedSongs';
export const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello , User</Text>
      <RecommendedSongs navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'beige',
    padding: 15,
  },
});
