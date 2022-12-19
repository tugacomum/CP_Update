import React from 'react';
import { StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import { View, Image } from 'react-native';
import { Alert } from 'react-native';
import { api } from '../services/api';
import { useState } from 'react';

export default function Program({ data }) {
    const id = useState(data.id);
    const getPrograms = async () => {
        try {
            const response = await api.get('programs', {id});
        } catch (err) {
            Alert.alert('Erro', err.message);
        }
    }
    return (
        <>
            <ScrollView>
                <TouchableOpacity onPress={getPrograms}>
                    <View style={{ top: 20, marginRight: 20, marginLeft: 20 }}>
                        <View style={{ paddingRight: 20, paddingLeft: 20 }}>
                            <Image source={{ uri: data.image }} style={{ borderRadius: 15, width: Dimensions.get('window').width / 1.15, height: 200, opacity: 0.8, backgroundColor: 'black', alignSelf: 'center' }} />
                            <View style={{ top: -100, left: 5 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>{data.name}</Text>
                                <Text style={{ color: 'white', top: 5, color: 'white' }}>{data.subTitle}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </>
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