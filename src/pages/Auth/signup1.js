import { Input, Item } from "native-base";
import React, { useState } from "react";
import { Text, ScrollView, ImageBackground, Dimensions, View, StyleSheet, Alert } from 'react-native';
import { Button } from "native-base";
import { Label } from "native-base";

export default function SignUp1({ navigation, route }) {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [cidade, setCidade] = useState();
    const [morada, setMorada] = useState();
    var genero = route.params.genero;
    var peso = route.params.peso;
    var altura = route.params.altura;
    var levelfitness = route.params.levelfitness;
    var objetivos = route.params.objetivos;
    var pull = route.params.pull;
    var push = route.params.push;
    var squads = route.params.squads;
    var dips = route.params.dips;
    
    function verify() {
        try {
            if (name == null || surname == null || cidade == null || morada == null)
                Alert.alert("Preencha todos os campos.");
            else if (name.length < 3)
                Alert.alert("O nome deve conter pelo menos 3 caracteres.");
            else if (surname.length < 3)
                Alert.alert("O sobrenome deve conter pelo menos 3 caracteres.");
            else if (morada.length < 5)
                Alert.alert("Introduza uma morada válida.");
            else if (cidade.length < 5)
                Alert.alert("Introduza uma cidade válida");
            else
                navigation.navigate('SignUp', {genero: genero, peso: peso, altura: altura, levelfitness: levelfitness, objetivos: objetivos, pull: pull, push: push, squads: squads, dips: dips, name: name, surname: surname, cidade: cidade, morada: morada})
        }
        catch (err) {
            Alert.alert("Erro: {0}", err);
        }
    }
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#ffffff' }}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={require('./../../../assets/img/teste4.jpg')}
                style={{
                    height: Dimensions.get('window').height / 2.5,
                }}>
                <View style={styles.brandView}>

                    <Text style={styles.brandViewText}>Calistenia Portugal</Text>
                </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#D21E1F', fontSize: 34 }}>Cria tua conta</Text>
                    <Text>Junta-te a nós e torna-te um mestre na Calistenia!</Text>
                    <View style={{ marginTop: 0 }}>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Nome</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setName(text)} value={name} style={{ top: 5 }} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Sobrenome</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setSurname(text)} value={surname} style={{ top: 5 }} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Cidade</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setCidade(text)} value={cidade} style={{ top: 5 }} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Morada</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setMorada(text)} value={morada} style={{ top: 5 }} />
                        </Item>
                    </View>
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.loginBtn} onPress={verify}>
                            <Text style={{ color: '#ffffff' }}>Seguinte</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandViewText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#ffffff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    forgotPassView: {
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
    },
    loginBtn: {
        alignSelf: 'center',
        backgroundColor: '#D21E1F',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
        top: 20
    }
});