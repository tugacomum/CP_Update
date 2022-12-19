import { Input, Item } from "native-base";
import React, { useState } from "react";
import { Text, ScrollView, ImageBackground, Dimensions, View, StyleSheet } from 'react-native';
import { Button } from "native-base";
import { Label } from "native-base";
import { api } from "../../services/api";
import { Alert } from "react-native";

export default function SignUp({ navigation, route }) {
    const URL_REGISTO = 'register';
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var gender = route.params.genero;
    var weight = route.params.peso;
    var height = route.params.altura;
    var fitnesslevel = route.params.levelfitness;
    var goals = route.params.objetivos;
    var pullup = route.params.pull;
    var pushup = route.params.push;
    var squads = route.params.squads;
    var dips = route.params.dips;
    var name = route.params.name;
    var surname = route.params.surname;
    var city = route.params.cidade;
    var adress = route.params.morada;

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            if (nickname.length < 6)
                Alert.alert("O seu nickname deve conter pelo menos 6 caracteres.");
            else if (email.length == 0)
                Alert.alert("Introduza um email válido.");
            else if (password.length < 8)
                Alert.alert("A password deve conter pelo menos 8 caracteres.");
            else {
                await api.post(URL_REGISTO, { nickname, email, password, goals, gender, weight, height, fitnesslevel, pullup, pushup, squads, dips, name, surname, city, adress });
                navigation.navigate('VerifyEmailaftersignup', {email: email});
                Alert.alert('Verifica a tua conta com o email que enviámos');
            }
        } catch (err) {
            console.log(err)
            Alert.alert('Erro', err.response.data.message)
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
                            <Label>Nickname</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setNickname(text)} value={nickname} style={{ top: 5 }} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Email</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setEmail(text)} value={email} style={{ top: 5 }} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Password</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} style={{ top: 5 }} />
                        </Item>
                    </View>
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.loginBtn} onPress={handleRegister}>
                            <Text style={{ color: '#ffffff' }}>Registar</Text>
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