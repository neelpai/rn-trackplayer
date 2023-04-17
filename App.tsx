import React from 'react';
import {SongPage} from './src/SongPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from './src/HomePage';
//  align-items: center; -> horizontal
//  justify-content: center; -> vertical

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'pink',
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        {/* <Stack.Screen name="Details" component={SongPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
