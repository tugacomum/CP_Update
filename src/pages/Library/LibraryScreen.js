import React from 'react'
import { View, Text, StyleSheet, Dimensions, RefreshControl, Button } from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const teste = Dimensions.get('window').width / 2.74
const testee = Dimensions.get('window').width / 9
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function library({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}

                />
            }>
            <Image source={require('./../../../assets/img/seila.png')} style={{ width: Dimensions.get('window').width, height: 240, position: 'absolute', backgroundColor: 'black', opacity: 0.8 }} />
            <View style={{ flexDirection: 'row', padding: 30, top: 10 }}>
                <Text style={{ borderColor: 'white', backgroundColor: 'white', borderWidth: 1, color: 'black', borderRadius: 5, fontWeight: 'bold', width: 170, textAlign: 'center' }}>DESTAQUE DE HOJE</Text>
                <MaterialCommunityIcons name="magnify" color='white' style={{ left: Dimensions.get('window').width / 1.2, position: 'absolute', top: 20, backgroundColor: 'white', opacity: 0.6, borderRadius: 30, width: 50, height: 50, textAlignVertical: 'center', textAlign: 'center', color: 'black' }} size={40} />
            </View>
            <View style={{ paddingLeft: 30, paddingTop: 50 }}>
                <Text style={{ fontWeight: 'bold', borderWidth: 1, borderRadius: 5, borderColor: '#D21E1F', backgroundColor: '#D21E1F', color: 'white', width: 100, textAlign: 'center', opacity: 0.9 }}>AVANÇADO</Text>
                <Text style={{ color: 'white', left: 5, top: 5, color: 'white' }}>Calistenia • Construção de força</Text>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, paddingTop: 5, left: 5 }}>Dia de prancha</Text>
            </View>
            <View style={{ height: 45 }}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Exercise')} style={{ height: 60, borderWidth: 1, borderRadius: 40, borderColor: 'black', backgroundColor: 'black', width: Dimensions.get('window').width / 1.1, alignSelf: 'center', opacity: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white', paddingLeft: 20, paddingTop: 8 }}>VER A BIBLIOTECA DE TREINOS</Text>
                <MaterialCommunityIcons name="arrow-right" color='white' style={{ left: Dimensions.get('window').width / 1.25, position: 'absolute', width: 50, height: 50, color: 'white', top: 15, opacity: 1 }} size={25} />
                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 12 }}>300+ treinos, todos os níveis</Text>
            </TouchableOpacity>
            <View style={{ top: -10, height: 1280 }}>
                <View style={{ flexDirection: 'row', padding: 22 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Programas</Text>
                    </View>
                    <View style={{ marginHorizontal: teste }}>
                        <Text style={{ color: '#D21E1F', fontSize: 14, top: 4, left: Dimensions.get('window').width / 8 }} onPress={() => navigation.navigate('Program')}>Ver todos</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 13, color: 'grey', paddingRight: 20, paddingLeft: 20, top: -20 }}>Alguns programas adaptados para todos os níveis de fitness.</Text>
                </View>
                <View style={{ flexDirection: 'row', top: -25, padding: 22, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Program')}>
                        <Image source={require('./../../../assets/img/fullpal.jpg')} style={{ borderRadius: 15, width: Dimensions.get('window').width / 1.1, height: 200, opacity: 0.8, backgroundColor: 'black', alignSelf: 'center' }} />
                        <View style={{ position: 'absolute', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, paddingTop: 80 }}>Programas</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 22, top: -50 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Exercícios</Text>
                    </View>
                    <View style={{ marginHorizontal: testee, left: 13 }}>
                        <Text style={{ color: '#D21E1F', fontSize: 14, top: 4, left: Dimensions.get('window').width / 2.7 }} onPress={() => navigation.navigate('Exercise')}>Ver todos</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 13, color: 'grey', paddingRight: 20, paddingLeft: 20, top: -68 }}>Livraria de exercícios extensivos com mais de 100 exercícios para todos os níveis.</Text>
                </View>
                <View style={{ flexDirection: 'row', top: -65, padding: 22, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Exercise')}>
                        <Image source={require('./../../../assets/img/1harm.jpg')} style={{ borderRadius: 15, width: Dimensions.get('window').width / 1.1, height: 200, opacity: 0.8, backgroundColor: 'black', alignSelf: 'center' }} />
                        <View style={{ position: 'absolute', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, paddingTop: 80 }}>Exercícios</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 22, top: -90 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Treinos</Text>
                    </View>
                    <View style={{ marginHorizontal: testee, left: 13 }}>
                        <Text style={{ color: '#D21E1F', fontSize: 14, top: 4, left: Dimensions.get('window').width / 2.4 }} onPress={() => navigation.navigate('Workout')}>Ver todos</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 13, color: 'grey', paddingRight: 20, paddingLeft: 20, top: -110 }}>Livraria de treinos com vários exercícios para todos os níveis.</Text>
                </View>
                <View style={{ flexDirection: 'row', top: -108, padding: 22, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Workout')}>
                        <Image source={require('./../../../assets/img/pullup.jpg')} style={{ borderRadius: 15, width: Dimensions.get('window').width / 1.1, height: 200, opacity: 0.8, backgroundColor: 'black', alignSelf: 'center' }} />
                        <View style={{ position: 'absolute', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, paddingTop: 80 }}>Treinos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 22, top: -130 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Loja</Text>
                    </View>
                    <View style={{ marginHorizontal: testee, left: 13 }}>
                        <Text style={{ color: '#D21E1F', fontSize: 14, top: 4, left: Dimensions.get('window').width / 2.05 }} onPress={() => navigation.navigate('Shop')}>Ver todos</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', top: -145, padding: 22, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                        <Image source={require('./../../../assets/img/training.jpg')} style={{ borderRadius: 15, width: Dimensions.get('window').width / 1.1, height: 200, opacity: 0.8, backgroundColor: 'black', alignSelf: 'center' }} />
                        <View style={{ position: 'absolute', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, paddingTop: 80 }}>Loja</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
});