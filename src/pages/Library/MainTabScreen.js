import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from './LibraryScreen';
import { useTheme } from 'react-native-paper';
import Exercise from './exercise';
import Program from './program';
import Shop from './shop';
import Workout from './workout';

const ProfileStack = createStackNavigator();

const MainTabScreen = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#D21E1F',
          height: 55,
        },
      }}>
      <ProfileStack.Screen
        name="Library"
        component={LibraryScreen}
      />
      <ProfileStack.Screen
        name="Exercise"
        options={{
          title: 'Exercícios',
          headerShown: true,
        }}
        component={Exercise}
      />
      <ProfileStack.Screen
        name="Program"
        options={{
          title: ' Programas',
          headerShown: true
        }}
        component={Program}
      />
      <ProfileStack.Screen
        name="Workout"
        options={{
          title: 'Treinos',
          headerShown: true
        }}
        component={Workout}
      />
      <ProfileStack.Screen
        name="Shop"
        options={{
          title: 'Loja',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
        component={Shop}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;