import {View, TouchableOpacity} from 'react-native';
import {SongDisplayContainer} from './SongDisplayContainer';
import React from 'react';
export const RecommendedSongs = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <SongDisplayContainer />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <SongDisplayContainer />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <SongDisplayContainer />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <SongDisplayContainer />
      </TouchableOpacity>
    </View>
  );
};
