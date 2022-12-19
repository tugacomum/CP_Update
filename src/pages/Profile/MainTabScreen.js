import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './EditProfileScreen';
import ProfileScreen from './ProfileScreen';
import 'react-native-gesture-handler';
import Reg1 from '../Auth/reg1';
import Reg2 from '../Auth/reg2';
import Reg3 from '../Auth/reg3';
import Reg4 from '../Auth/reg4';
import Reg5 from '../Auth/reg5';
import Reg6 from '../Auth/reg6';
import Workout from './../Library/workout';
const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
  return (
    <>
      <ProfileStack.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {
              backgroundColor: '#D21E1F',
              height: 0,
          }
        }}>
        <ProfileStack.Screen
          name="Profile"
          options={{
            title: 'Perfil',
          }}
          component={ProfileScreen}
        /><ProfileStack.Screen
          name="EditProfile"
          component={EditProfileScreen}
        />
        <ProfileStack.Screen
          name="Reg1"
          component={Reg1}
        />
        <ProfileStack.Screen
          name="Reg2"
          component={Reg2}
        />
        <ProfileStack.Screen
          name="Reg3"
          component={Reg3}
        />
        <ProfileStack.Screen
          name="Reg4"
          component={Reg4}
        />
        <ProfileStack.Screen
          name="Reg5"
          component={Reg5}
        />
        <ProfileStack.Screen
          name="Reg6"
          component={Reg6}
        />
        <ProfileStack.Screen
        name="Workouts"
        options={{
          title: 'Treinos',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={Workout}
      />
      </ProfileStack.Navigator>
    </>
  );
};

export default MainTabScreen;