import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Dimensions, Button } from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import 'react-native-gesture-handler';
import { useRef } from 'react';
import { api } from '../services/api';
import { Alert } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function Exercise({ data }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const bottomSheet = useRef();
    const [exerciseId, setexerciseId] = useState('');
    const URL_REGISTO = 'insertuserexercise';
    const saveExercise = async () => {
        try {
            setexerciseId(exerciseId);
            await api.post(URL_REGISTO, { exerciseId: data.id })
        } catch (err) {
            Alert.alert('Erro', err.message)
        }
    }
    return (
        <>
            <SafeAreaView>
                <BottomSheet hasDraggaleIcon ref={bottomSheet} height={530}>
                <Video
                source={{ uri: 'https://vimeo.com/714731200' }}
                rate={1.0}
                isMuted={false}
                resizeMode="cover"
                volume={1.0}
                shouldPlay
                isLooping
                style={{width: Dimensions.get('window').width / 1, height: 200, top: -20}}
                /> 
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={{ fontSize: 20, paddingLeft: 15, color: 'black' }}>{data.name}</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                        <View style={{ height: 10 }}></View>
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>{data.musclegroup}</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                        <View style={{ height: 10 }}></View>
                        <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>{data.level}</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                        <View style={{ paddingLeft: 15 }}>
                            <View style={{ height: 10 }}></View>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>{data.equipment}</Text>
                        </View>
                        <TouchableOpacity onPress={saveExercise}>
                            <View style={{ left: 15, width: Dimensions.get('window').width / 2, top: 20, borderWidth: 1, borderColor: 'white', borderRadius: 10, height: 50, backgroundColor: 'white', fontWeight: 'bold', color: 'black', fontSize: 15, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 5, flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlignVertical: 'center', paddingLeft: 30 }}>Adicionar exercício</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </SafeAreaView>
            <ScrollView>
                <TouchableOpacity style={{ height: 120, borderRadius: 10, width: Dimensions.get('window').width / 1.11 }} onPress={() => bottomSheet.current.show()}>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Image source={{ uri: data.image }} style={{ borderRadius: 10, height: 85, width: 120 }} />
                    </View>
                    <View style={{ left: Dimensions.get('window').width / 2.9, bottom: 80 }}>
                        <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
                        <Text style={{ color: 'grey' }}>{data.level}</Text>
                        <Text style={{ color: 'grey' }}>{data.musclegroup}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
});