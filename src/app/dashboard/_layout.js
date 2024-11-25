import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const dashboard = () => {
  return (
    <Tabs
    screenOptions={{
        headerShown:false,

    }}
    >
      <Tabs.Screen 
      
      name='index' options={{title:'Home',
        tabBarIcon:({focused,color,size})=>(
            <MaterialCommunityIcons
                name={focused ? 'home':'home-outline'}
                color={color}
                size={size}
            />
        ),
      }}
      />
      <Tabs.Screen 
      
      name='Settings' options={{title:'Settings',
        tabBarIcon:({focused,color,size})=>(
            <MaterialCommunityIcons
                name={focused ? 'cog':'cog-outline'}
                color={color}
                size={size}
            />
        ),
      }}
      />
    </Tabs>
  );
};
  
    export default dashboard;
  

