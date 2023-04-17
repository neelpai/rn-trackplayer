import {View, Text} from 'react-native';
export const SongDisplayContainer = ({text}: {text: string}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        marginTop: 20,
      }}>
      <Text> {text}</Text>
    </View>
  );
};
