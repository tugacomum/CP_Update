import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from 'react-native';
import { api } from '../../services/api';
import Programs from '../../components/program';
import { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function Program() {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    getPrograms()
  }, [])
  const getPrograms = async () => {
    try {
      const response = await api.get('programsonly').then(r => r.data);
      setPrograms(response);
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  }
  return (
    <ScrollView>
      <View>
        {
          programs.map(item => <Programs data={item} />)
        }
      </View>
      <View style={{height: 50}}></View>
    </ScrollView>
  )
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