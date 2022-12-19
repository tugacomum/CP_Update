import React from 'react';
import { Input, Item } from "native-base";
import {
  View,
  Text,
  StyleSheet,
  Dimensions, Image, ScrollView
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Alert, RefreshControl } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "native-base";
import { api } from '../../services/api';
import { useAuth } from '../../contexts/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const EditProfileScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const URL_REGISTO = 'profile';
  const { user, setUser, logout } = useAuth();
  const [nickname, setNickname] = useState(user.nickname ?? "");
  const [name, setName] = useState(user.name ?? "");
  const [surname, setSurname] = useState(user.surname ?? "");
  const [goals, setGoals] = useState(user.goals ?? "");
  const [city, setCity] = useState(user.city ?? "");
  const [adress, setAdress] = useState(user.adress ?? "");
  const [avatar, setAvatar] = useState(user.avatar ?? "");
  const [bio, setBio] = useState(user.bio ?? "");
  const [email] = useState(user.email ?? "");
  const [image, setImage] = useState(null);
  const [gender] = useState(user.gender ?? "");
  const [weight, setWeight] = useState(user.weight ?? "");
  const [height, setHeight] = useState(user.height ?? "");
  const [pullup, setPull] = useState(user.pullup ?? "");
  const [pushup, setPush] = useState(user.pushup ?? "");
  const [squads, setSquads] = useState(user.squads ?? "");
  const [dips, setDips] = useState(user.dips ?? "");
  const [fitnesslevel, setFitnessLevel] = useState(user.fitnesslevel ?? "");

  const EditProfile = async (e) => {
    e.preventDefault();
    try {
      if (nickname.length < 6 || nickname == null) {
        Alert.alert("O campo nickname tem que ser maior que 6 e não pode estar vazio");
      }
      else if (name.length < 3 || name == null) {
        Alert.alert("O campo nome tem que ser maior ou igual que 3 e não pode estar vazio");
      }
      else if (city.length < 5 || city == null) {
        Alert.alert("O campo cidade tem que ser maior que 5 e não pode estar vazio");
      }
      else if (bio.length < 3 || bio.length > 100) {
        Alert.alert("A sua biografia deve conter entre 5 a 100 caracteres");
      }
      
      else {
        const response = await api.patch(URL_REGISTO, { nickname, name, surname, goals, city, adress, avatar, bio, image, gender, weight, height, pullup, pushup, squads, dips, fitnesslevel });
        setUser({ ...user, nickname, goals, avatar, bio });
        navigation.navigate('Profile');
      }
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  }
  return (
    <>
      <SafeAreaView>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          <Image source={require('./../../../assets/img/pfpback.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 140, position: 'absolute', opacity: 0.8 }} />
          <MaterialCommunityIcons name="arrow-left" color='white' style={{ padding: 15, position: 'absolute' }} size={30} onPress={() => navigation.navigate('Profile')} />
          <Avatar.Image source={{ uri: image }} size={120} style={{ alignSelf: 'center', top: 90 }} />
          <View style={{ top: 70, height: 1340 }}>
            <Text style={{ color: 'black', fontSize: 15, top: 0, left: 20, fontWeight: 'bold' }}>O teu perfil</Text>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' onChangeText={(text) => setNickname(text)} value={nickname} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -10, fontWeight: 'bold' }}>Nickname</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={email} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Email</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' onChangeText={(text) => setName(text)} value={name} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Nome</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' onChangeText={(text) => setSurname(text)} value={surname} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Sobrenome</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={city} onChangeText={(text) => setCity(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Cidade</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={adress} onChangeText={(text) => setAdress(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Morada</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Portugal'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>País</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' onChangeText={(text) => setBio(text)} value={bio} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Bio</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'Configurações de treino'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Permitir sons</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'Perfil fitness'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg1')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={gender} onChangeText={(text) => setGender(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Género</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg2')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={weight} onChangeText={(text) => setWeight(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Peso</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg3')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={height} onChangeText={(text) => setHeight(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Altura</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg4')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={fitnesslevel} onChangeText={(text) => setFitnessLevel(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Nível fitness</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg5')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={goals} onChangeText={(text) => setGoals(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Objetivos</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={pullup} onChangeText={(text) => setPull(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. PullUps</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={pushup} onChangeText={(text) => setPush(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. PushUps</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={squads} onChangeText={(text) => setSquads(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. Squads</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={dips} onChangeText={(text) => setDips(text)} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. Dips</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'Conta'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Trocar password'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color: 'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Trocar endereço email'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color: 'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'App'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Avalia a app'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color: 'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Termos e condições'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color: 'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Contacta-nos'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color: 'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => logout()}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Terminar sessão'} /><MaterialCommunityIcons name="logout" color='white' style={{ padding: 15, position: 'absolute', color: 'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => logout()} />
            </Item>
            <View style={{ height: 50 }}></View>
          </View>
          <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Button style={styles.loginBtn} onPress={EditProfile}>
              <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Editar</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EditProfileScreen;

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
    width: Dimensions.get('window').width / 1,
    justifyContent: 'center',
    bottom: Dimensions.get('window').height / 24,
  }
});