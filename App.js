import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './src/Components/Settings';
import Login from './src/loginregister/Login';
import Signup from './src/loginregister/Register';
import Password from './src/loginregister/Forgotpassword';

const Stack = createStackNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Signup} />
          <Stack.Screen name="Settings">
            {() => <Settings isDarkMode={isDarkMode} toggleSwitch={toggleDarkMode} />} 
          </Stack.Screen>
          <Stack.Screen name="Password" component={Password} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
