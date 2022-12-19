import React from 'react';
import { StyleSheet,} from 'react-native';
import { View } from 'react-native';
import { api } from '../../services/api';
import Workout from '../../components/workout';
import { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function Program() {
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    getWorkouts()
  }, [])
  const getWorkouts = async () => {
    try {
      const response = await api.get('workout').then(r => r.data);
      setWorkout(response);
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  }
  return (
      <View>
        {
          workout.map(item => <Workout data={item} />)
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  view: {
    margin: 10,
  },
});