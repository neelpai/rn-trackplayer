import {View, StyleSheet, ScrollView} from 'react-native';
import {SongDisplayContainer} from './SongDisplayContainer';
import React from 'react';
export const RecommendedSongs = ({navigation}) => {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <View style={styles.views}>
      <ScrollView style={styles.recommendationView}>
        {a.map(item => {
          return <SongDisplayContainer key={item} text={item.toString()} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    flex: 1,
  },
  recommendationView: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
});
