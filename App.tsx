
import 'react-native-gesture-handler';
import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {  Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home_screen';
import NuevoScreen from './screens/nuevo_screen';
import DetallesScreen from './screens/detalles_screen';

const Stack = createStackNavigator();
const theme = {...DefaultTheme, colors:{
  ...DefaultTheme.colors,
  primary:'#1774F2'
}}


function App() {
  

  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Nuevo'
    screenOptions={{
      headerStyle:{
        backgroundColor:theme.colors.primary,
        alignItems: 'center',
      },
      headerTintColor:theme.colors.surface,
      headerTitleAlign:'center',
    } }
    
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Nuevo" component={NuevoScreen} />
      <Stack.Screen name="Detalles" component={DetallesScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
