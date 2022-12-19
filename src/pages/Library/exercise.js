import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from './../../services/api';
import { Alert } from 'react-native';
import Exercises from '../../components/exercise';

export default function Exercise() {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        getExercises()
    }, [])
    const getExercises = async () => {
        try {
            const response = await api.get('exercises').then(r => r.data);
            console.log(response);
            setExercises(response);
        } catch (err) {
            Alert.alert('Erro', err.message);
        }
    }
    return (
        <View style={{ left: 30, top: 40 }}>
            <ScrollView>
                <View>
                    {
                        exercises.map(item => <Exercises data={item} />)
                    }
                </View>
                <View style={{height: 100}}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    view: {
        margin: 10,
    },
    imgstyle: {
        borderRadius: 10, width: 115, height: 85
    },
    textexecstyle: {
        fontSize: 15, paddingLeft: 15, paddingTop: 20, color: 'black'
    },
    textgroupstyle: {
        fontSize: 12, paddingLeft: 130, color: 'grey', top: -40
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: "#140078",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        shadowRadius: 5,
        elevation: 6,
    },
    text: {
        color: "white",
        fontWeight: "600",
    },
});