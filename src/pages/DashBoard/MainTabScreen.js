import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import dashboard from './DashboardScreen';
import calendar from './CalendarScreen';
import ListExerciseUser from './list_exercise_user';
import ListWorkoutUser from './list_workout_user';
import ListProgramUser from './list_program_user';
import Program from './../Library/program';
import Workout from './../Library/workout';
import Exercise from './../Library/exercise';
import { useAuth } from '../../contexts/auth';
const ProfileStack = createStackNavigator();

const MainTabScreen = ({navigation}) => {
  const {user} = useAuth();
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: 'white',
      headerStyle: {
          backgroundColor: '#D21E1F',
          height: 95,
      }
    }}>
        <ProfileStack.Screen
        name="Dashboard"
        options={{
          title: 'Bem-vindo, '+ user.nickname + '...',
        }}
        component={dashboard}
      />
      <ProfileStack.Screen
        name="Calendar"
        options={{
          title: 'Calendário de treino',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={calendar}
      />
      <ProfileStack.Screen
        name="ListExerciseUser"
        options={{
          title: 'Exercícios Adicionados',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={ListExerciseUser}
      />
      <ProfileStack.Screen
        name="ListWorkoutUser"
        options={{
          title: 'Treinos Adicionados',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={ListWorkoutUser}
      />
      <ProfileStack.Screen
        name="ListProgramUser"
        options={{
          title: 'Programas Adicionados',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={ListProgramUser}
      />
      <ProfileStack.Screen
        name="Programs"
        options={{
          title: 'Programas',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={Program}
      />
      <ProfileStack.Screen
        name="Workouts"
        options={{
          title: 'Treinos',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={Workout}
      />
      <ProfileStack.Screen
        name="Exercises"
        options={{
          title: 'Exercícios',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 55
          },
        }}
        component={Exercise}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;