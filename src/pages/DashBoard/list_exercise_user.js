import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { useState } from 'react';
import { Alert } from 'react-native';
import Exercise from '../../components/userexercise';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ListExerciseUser({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        getExercises()
    }, [])
    const getExercises = async () => {
        try {
            const response = await api.get('userexercise').then(r => r.data);
            console.log(response);
            setExercises(response);
        } catch (err) {
            Alert.alert('Erro', err.message);
        }
    }
    if (exercises.length > 1) {
        return (
            <View style={{ left: 30, top: 40 }}>
                <ScrollView>
                    <View>
                        {
                            exercises.map(item => <Exercise data={item} />)
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
    else {
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignSelf: 'center', padding: 20, top: 80 }}>
                        <ImageBackground source={require('./../../../assets/img/dumbbell.png')} style={{
                            top: 80,
                            height: 80,
                            width: 80,
                            alignSelf: 'center'
                        }} />
                        <Text style={styles.exercTitle}>Nenhum exercício guardado</Text>
                        <Text style={{
                            top: 80,
                            fontSize: 16,
                            alignSelf: 'center',
                            textAlign: 'center', color: 'grey'
                        }}>Os exercícios que guardares vão aparecer aqui!</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
                    <Button style={styles.btn} onPress={() => navigation.navigate('Exercises')}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Ver exercícios</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 15,
        color: 'white',
    },
    caption: {
        top: -5,
        fontSize: 14,
        lineHeight: 14,
        color: 'white',
        alignSelf: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    plus1: {
        top: 80,
        height: 80,
        width: 80,
        alignSelf: 'center',
    },
    exercTitle: {
        top: 80,
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey'
    },
    btn: {
        alignSelf: 'center',
        backgroundColor: '#D21E1F',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
        top: 50
    }
});