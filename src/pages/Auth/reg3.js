import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

const teste = Dimensions.get('window').height / 1.34
const testee = Dimensions.get('window').height / 4

export default function Reg3({ navigation, route }) {
    const [altura, setAltura] = useState(); 
    var genero = route.params.genero;
    var peso = route.params.peso;
    function verify () {
        try {
            if(altura == null)
                Alert.alert("Indique a sua altura.");
            else
                navigation.navigate('Reg4', {genero: genero, peso: peso, altura: altura});
        }
        catch (err) {
            Alert.alert("Erro: {0}", err);
        }
    }
    return (
        <View>
            <ImageBackground
                source={require('./../../../assets/img/teste5.jpg')}
                style={styles.img}>
                <Text style={styles.textTitle}>Calistenia Portugal</Text>
                <Text style={styles.textP}>Altura</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TextInput keyboardType='numeric' value={altura} onChangeText={(text) => setAltura(text)} style={{ borderColor: 'white', backgroundColor: 'white', opacity: 0.8, width: 60, borderWidth: 1, alignSelf: 'center', borderRadius: 10, color: 'black', top: Dimensions.get('window').height / 3, textAlign: 'center' }}></TextInput>
                    <Text style={{ color: 'white', top: Dimensions.get('window').height / 2.96, left: 10 }}>cm</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button onPress={verify} style={styles.btnregister}>
                        <Text style={styles.textregister}>Próximo</Text>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    textP: {
        top: testee,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',
    },
    textTitle: {
        paddingTop: 40,
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    btnregister: {
        top: teste,
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
    },
    textregister: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17
    },
});