import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            {/* Home */}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            {/* Map */}
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
          {/* <HomeScreen/> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}


