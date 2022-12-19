import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

export default function UserProgram({ data }) {
    return (
        <>
            <ScrollView style={{}}>
                <TouchableOpacity style={{height: 120, borderRadius: 10, width: Dimensions.get('window').width / 1.11}}>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Image source={{ uri: data.image }} style={{ borderRadius: 10, height: 85, width: 120 }} />
                    </View>
                    <View style={{ left: Dimensions.get('window').width / 2.9, bottom: 80 }}>
                        <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
                        <Text style={{ color: 'grey' }}>{data.subTitle}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
});