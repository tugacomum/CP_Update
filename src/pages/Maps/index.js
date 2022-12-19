import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Linking } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from "expo-location";
import BottomSheet from "react-native-gesture-bottom-sheet";
import 'react-native-gesture-handler';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_KEY } from './googleMapKey';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from 'native-base';

export default function maps() {
  const bottomSheet1 = useRef();
  const bottomSheet2 = useRef();
  const bottomSheet3 = useRef();
  const bottomSheet4 = useRef();
  const bottomSheet5 = useRef();
  const bottomSheet6 = useRef();
  const bottomSheet7 = useRef();
  const bottomSheet8 = useRef();
  const bottomSheet9 = useRef();
  const bottomSheet10 = useRef();
  const bottomSheet11 = useRef();
  const bottomSheet12 = useRef();
  const bottomSheet13 = useRef();
  const bottomSheet14 = useRef();
  const bottomSheet15 = useRef();
  const bottomSheet16 = useRef();
  const bottomSheet17 = useRef();
  const bottomSheet18 = useRef();
  const bottomSheet19 = useRef();
  const bottomSheet20 = useRef();
  const bottomSheet21 = useRef();
  const bottomSheet22 = useRef();
  const bottomSheet23 = useRef();
  const bottomSheet24 = useRef();
  const bottomSheet25 = useRef();
  const bottomSheet26 = useRef();
  const bottomSheet27 = useRef();
  const bottomSheet28 = useRef();
  const bottomSheet29 = useRef();
  const [selectPonto, setPonto] = useState();
  const pontos = [{
    latitude: 40.657,
    longitude: -7.914,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.6556,
    longitude: -7.9155,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.65780,
    longitude: -7.9001,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.6655,
    longitude: -7.9032,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.6569,
    longitude: -7.92666,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.66289,
    longitude: -7.9219915,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.6647363,
    longitude: -7.9230006,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.6550,
    longitude: -7.92509,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.6285298,
    longitude: -7.858,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.20496,
    longitude: -8.4278,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 41.69599,
    longitude: -8.815719,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.2095,
    longitude: -8.4180,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.2055695,
    longitude: -8.421000,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 41.16855,
    longitude: -8.67777,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 37.130761,
    longitude: -8.240604,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 41.15959,
    longitude: -8.66000,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.650973,
    longitude: -8.625669,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 38.776022,
    longitude: -9.113296,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 41.15199,
    longitude: -8.6577,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 41.558954,
    longitude: -8.430377,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 41.299991,
    longitude: -7.736297,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 41.489564,
    longitude: -7.180113,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 40.549128,
    longitude: -7.244423,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 39.824118,
    longitude: -7.509136,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 38.5633161,
    longitude: -7.92197,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 39.748,
    longitude: -8.81022,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 39.293705,
    longitude: -7.428378,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  },
  {
    latitude: 39.233839,
    longitude: -8.676134,
    latitudeDelta: 0.05,
    longitudeDelta: 0.005,
  }
  ];
  const [pin, setpin] = React.useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  useEffect(() => {
    getLocation()
  }, [])
  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to acess location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    setpin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }
  function bs1func() {
    bottomSheet1.current.close();
    setPonto(pontos[0]);
  }
  function bs2func() {
    bottomSheet2.current.close();
    setPonto(pontos[1]);
  }
  function bs3func() {
    bottomSheet3.current.close();
    setPonto(pontos[2]);
  }
  function bs4func() {
    bottomSheet4.current.close();
    setPonto(pontos[3]);
  }
  function bs5func() {
    bottomSheet5.current.close();
    setPonto(pontos[4]);
  }
  function bs6func() {
    bottomSheet6.current.close();
    setPonto(pontos[5]);
  }
  function bs7func() {
    bottomSheet7.current.close();
    setPonto(pontos[6]);
  }
  function bs8func() {
    bottomSheet8.current.close();
    setPonto(pontos[7]);
  }
  function bs9func() {
    bottomSheet9.current.close();
    setPonto(pontos[8]);
  }
  function bs10func() {
    bottomSheet10.current.close();
    setPonto(pontos[9])
  }
  function bs11func() {
    bottomSheet11.current.close();
    setPonto(pontos[10])
  }
  function bs12func() {
    bottomSheet12.current.close();
    setPonto(pontos[11])
  }
  function bs13func() {
    bottomSheet13.current.close();
    setPonto(pontos[12])
  }
  function bs14func() {
    bottomSheet14.current.close();
    setPonto(pontos[13])
  }
  function bs15func() {
    bottomSheet15.current.close();
    setPonto(pontos[14])
  }
  function bs16func() {
    bottomSheet16.current.close();
    setPonto(pontos[15])
  }
  function bs17func() {
    bottomSheet17.current.close();
    setPonto(pontos[16])
  }
  function bs18func() {
    bottomSheet18.current.close();
    setPonto(pontos[17])
  }
  function bs19func() {
    bottomSheet19.current.close();
    setPonto(pontos[18])
  }
  function bs20func() {
    bottomSheet20.current.close();
    setPonto(pontos[19])
  }
  function bs21func() {
    bottomSheet21.current.close();
    setPonto(pontos[20])
  }
  function bs22func() {
    bottomSheet22.current.close();
    setPonto(pontos[21])
  }
  function bs23func() {
    bottomSheet23.current.close();
    setPonto(pontos[22])
  }
  function bs24func() {
    bottomSheet24.current.close();
    setPonto(pontos[23])
  }
  function bs25func() {
    bottomSheet25.current.close();
    setPonto(pontos[24])
  }
  function bs26func() {
    bottomSheet26.current.close();
    setPonto(pontos[25])
  }
  function bs27func() {
    bottomSheet27.current.close();
    setPonto(pontos[26])
  }
  function bs28func() {
    bottomSheet28.current.close();
    setPonto(pontos[27])
  }
  function bs29func() {
    bottomSheet29.current.close();
    setPonto(pontos[28])
  }
  return (
    <View style={styles.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet1} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5 }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Aquilíno Ribeiro</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>mais conhecido como Parque da Cidade, está situado numa boa zona para descanço e diversão, este também tem um parque infantil, gelataria e monumentos.</Text>
        </View>
        <Image source={require('./../../../assets/img/parque1.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs1func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet2} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5 }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque do Fontelo</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O Parque do Fontelo, também chamado Parque Desportivo do Fontelo, é uma área protegida portuguesa, localizada na cidade de Viseu. O parque ocupa uma área de 10 hectares de exuberante vegetação. </Text>
        </View>
        <Image source={require('./../../../assets/img/parque2.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs2func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet3} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque de Santiago</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O Parque da Radial de Santiago, seja em bicicleta ou num passeio pedestre, junto à margem do Rio Pavia ou pelo centro  do parque, inverno ou verão, este é um local a visitar para os  que apreciam a tranquilidade, as cores, cheiros e sensações   que a Natureza oferece. </Text>
        </View>
        <Image source={require('./../../../assets/img/parque3.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs3func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet4} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 10, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Jardim Rua Quinta do Bosque</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Este jardim circular, de pequenas dimensões, relvado e arborizado, dispõe de uma fonte antiga em granito. </Text>
        </View>
        <Image source={require('./../../../assets/img/jardim.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs4func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet5} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Linear do Rio Pavia</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O rio Pavia rasga um trilho natural que guia o passeio pelas suas margens. Iniciando a viagem junto ao Bairro da Balsa, siga o percurso instintivamente. Siga pelo campo da Feira de São Mateus e descanse na relva junto ao espelho de água. </Text>
        </View>
        <Image source={require('./../../../assets/img/parque4.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs5func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet6} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Jardim Das Mães</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Subindo do Rossio para o Museu de Almeida Moreira, no Largo Major Teles, encontramos um pequeno jardim com tonalidades deslumbrantes oferecidas por amores-perfeitos, petúnias e rosas. Símbolo do amor, a rosa é uma atração neste jardim.</Text>
        </View>
        <Image source={require('./../../../assets/img/jardim2.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs6func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet7} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Urbano da Aguieira</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O Parque Urbano da Aguieira previsto para a zona da Aguieira, , ainda não foi concluído, atualmente é apenas constituído por uma mancha verde, percorrida pela Ecopista do Dão.</Text>
        </View>
        <Image source={require('./../../../assets/img/parque5.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs7func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet8} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Jardim Mestre António Nelas</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Este jardim, amplo e relvado, dispõe de alguns bancos de pedra. Encontra-se em bom estado de conservação.</Text>
        </View>
        <Image source={require('./../../../assets/img/jardim3.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs8func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet9} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Público Fragosela</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Este parque, amplo e Natural, oferece-nos uma paisagem tranquila e relaxa, ótimo para fazer quaisquer tipo de exercícios físicos.</Text>
        </View>
        <Image source={require('./../../../assets/img/parque6.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs9func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet10} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Verde do Mondego</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O parque fica situado na margem do Rio Mondego e permite um passeio agradável e descontraído com uma linda paisagem! Bom também para os mais pequenos se divertirem... </Text>
        </View>
        <Image source={require('./../../../assets/img/urso_pelado.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs10func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet11} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque de Viana do Castelo</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O parque fica situado em Viana do Castelo e permite um passeio agradável e descontraído com uma linda paisagem! Bom também para os mais pequenos se divertirem... </Text>
        </View>
        <Image source={require('./../../../assets/img/vianacastelo.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs11func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet12} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque da Sereia</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Neste parque destacam-se lugares como a Fonte do Nogal, que tem uma estátua que representa um tritão a abrir a boca de um golfinho; depois também há uma zona destinada para jogar à bola, que tem como fundo paisagistico uma bela cascata.</Text>
        </View>
        <Image source={require('./../../../assets/img/unknown.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs12func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet13} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Jardim Botânico</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O Jardim Botânico da Universidade de Coimbra, é um jardim botânico com 13,5 hectares de área, situado em Coimbra, Portugal. É membro da Associação Ibero-Macaronésica de Jardins Botânicos e da BGCI, e apresenta programas de conservação para a International Agenda for Botanic Gardens in Conservation.</Text>
        </View>
        <Image source={require('./../../../assets/img/botanicoo.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs13func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet14} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque da cidade do Porto </Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Um Parque cheio de charme, muito bem cuidado, beleza em toda sua extensão. Com um lago lindo, gansos e patos que alegra os olhos de tanta beleza.Tem a Estacao da Água que é muito interessante e importante conhecer.Ao chegar no fim do Parque você chega no Mar, que vista ...</Text>
        </View>
        <Image source={require('./../../../assets/img/porto.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs14func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet15} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque da Alfarrobeira</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Lugar tranquilo e encantador ao lado do parque infantil e local de patinação. Limpo e arrumado. Servindo comida e bebidas, preços baixos.</Text>
        </View>
        <Image source={require('./../../../assets/img/alfarrobeira.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs15func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet16} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque de Serralves </Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>O Serralves no Porto é um local imperdivel , que sempre nos surpreende com maravilhosas exposições e programações , com atendimento impecável . Local perfeito para passar um dia inteiro !</Text>
        </View>
        <Image source={require('./../../../assets/img/serralves.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs16func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet17} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Aventura Fonte do Meio</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Um parque muito divertido, um dos nossos favoritos. Muito o que fazer e ótimo lugar para comemorar um aniversário ou apenas um divertido piquenique.</Text>
        </View>
        <Image source={require('./../../../assets/img/parqueaveiro.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs17func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet18} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Calisthenics Park Olivais Norte</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Morei no final desta rua durante 5 anos. Você tem tudo que precisa para se exercitar e os frequentadores desse parque são muito respeitosos.</Text>
        </View>
        <Image source={require('./../../../assets/img/calisthenicslisboa.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs18func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet19} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Urbano da Pasteleira</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Parque muito bonito e bastante agradável para levar as crianças</Text>
        </View>
        <Image source={require('./../../../assets/img/pasteleira.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs19func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet20} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque de Street Workout</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Ótimo local para treinar calistenia com serenidade e dedicação</Text>
        </View>
        <Image source={require('./../../../assets/img/calisteniak.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs20func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet21} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque de maquinas fitness</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Parque com 6 máquinas fitness ao longo do rio corgo. Muita sombra e relva. Local muito agradável</Text>
        </View>
        <Image source={require('./../../../assets/img/vilarela.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs21func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet22} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque da Ribeira de Carvalhais</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Sítio ideal para fazer exercício físico ou simplesmente ler um bom livro ao som da natureza.</Text>
        </View>
        <Image source={require('./../../../assets/img/braganca.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs22func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet23} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Urbano do Rio Diz</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Enorme parque infantil com imenso potencial mas infelizmente pouco cuidado. Alguns equipamentos partidos, velhos e visivelmente sem manutenção. Mas ainda assim as crianças divertiram-se a valer!</Text>
        </View>
        <Image source={require('./../../../assets/img/riodiz.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs23func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet24} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque das Violetas</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Parque muito agradável para uma sessão de ar livre e companhia agradável. Com equipamentos para exercício, pode-se passar um tempo bastante agradável. Com muita natureza para apreciar.</Text>
        </View>
        <Image source={require('./../../../assets/img/violetas.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs24func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet25} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque das Violetas</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Parque muito agradável para uma sessão de ar livre e companhia agradável. Com equipamentos para exercício, pode-se passar um tempo bastante agradável. Com muita natureza para apreciar.</Text>
        </View>
        <Image source={require('./../../../assets/img/lustiano.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs25func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet26} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Parque Verde da Encosta Do Castelo</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Local agradável, com algumas mesas para lanchar. Permite fazer geocaching.</Text>
        </View>
        <Image source={require('./../../../assets/img/verdecastelo.png')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs26func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet27} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Jardim da Corredoura</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Jardim com dimensões razoáveis, verde com bastantes árvores e flores mas peca na limpeza e os espelhos de água não estarem a funcionar (parece que já não é de agora).</Text>
        </View>
        <Image source={require('./../../../assets/img/corredoura.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs27func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <BottomSheet hasDraggableIcon ref={bottomSheet28} height={500} >
        <View style={{ paddingLeft: 20, paddingTop: 5, }}>
          <Text style={{ fontSize: 25, paddingTop: 5, color: 'black' }}>Jardim das Portas do Sol</Text>
          <Text style={{ fontSize: 12, paddingTop: 15, color: 'grey' }}>Jardim com dimensões razoáveis, com espaço para treinar ao ar livre.</Text>
        </View>
        <Image source={require('./../../../assets/img/portassol.jpg')} style={{ width: Dimensions.get('window').width / 1.1, height: 250, top: 20, alignSelf: 'center', borderRadius: 10 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <Button style={styles.btn} onPress={bs28func}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Iniciar rota</Text>
          </Button>
        </View>
      </BottomSheet>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapview}
        initialRegion={{
          latitude: 39.1370879,
          longitude: -8.1453168,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          setpin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        {
          selectPonto && <MapViewDirections origin={pin} destination={selectPonto} apikey={GOOGLE_MAP_KEY} strokeColor="red" strokeWidth={3} optimizeWaypoints={true} />
        }
        {/* Nossa localização */}
        <Marker
          coordinate={pin}
          onDragEnd={(e) => {
            setpin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
          pinColor='red'
        >
        </Marker>
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet1.current.show()}
          coordinate={pontos[0]}
          draggable={true}
          pinColor='#3CB371'
        >
        </Marker>
        <Circle
          center={{ latitude: 40.6556, longitude: -7.9155 }}
        />
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet2.current.show()}
          coordinate={pontos[1]}
          draggable={true}
          pinColor='#3CB371'
        >
        </Marker>
        <Circle
          center={{
            latitude: 40.65780,
            longitude: -7.9001
          }}
        />
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet3.current.show()}
          coordinate={pontos[2]}
          draggable={true}
          pinColor='#3CB371'
        >
        </Marker>
        <Circle
          center={{
            latitude: 40.6655,
            longitude: -7.9032
          }}
        />
        {/* Jardim  */}
        <Marker
          onPress={() => bottomSheet4.current.show()}
          coordinate={pontos[3]}
          draggable={true}
          pinColor='#3CB371'
        >
        </Marker>
        <Circle
          center={{
            latitude: 40.6569,
            longitude: -7.92666
          }}
        />
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet5.current.show()}
          coordinate={pontos[4]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 40.66289,
            longitude: -7.9219915
          }} />
        {/* Jardim  */}
        <Marker
          onPress={() => bottomSheet6.current.show()}
          coordinate={pontos[5]}
          pinColor='#3CB371'
          draggable={true}
        >
        </Marker>
        <Circle
          center={{
            latitude: 40.6581973,
            longitude: -7.91360
          }}
        />
        <Marker
          onPress={() => bottomSheet7.current.show()}
          coordinate={pontos[6]}
          pinColor='#3CB371'
          draggable={true}
        >
        </Marker>
        <Circle
          center={{
            latitude: 40.6647363,
            longitude: -7.9230006
          }}
        />
        {/* Jardim  */}
        <Marker
          onPress={() => bottomSheet8.current.show()}
          coordinate={pontos[7]}
          pinColor='#3CB371'
          draggable={true}
        >
        </Marker>
        <Circle
          center={{
            latitude: 40.6550,
            longitude: -7.92509
          }}
        />
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet9.current.show()}
          coordinate={pontos[8]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 40.6285298,
            longitude: -7.858
          }} />
        <Marker
          onPress={() => bottomSheet10.current.show()}
          coordinate={pontos[9]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 40.20345,
            longitude: -8.427877
          }} />
        <Marker
          onPress={() => bottomSheet11.current.show()}
          coordinate={pontos[10]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 41.7166154,
            longitude: -8.8806071
          }} />
        <Marker
          onPress={() => bottomSheet12.current.show()}
          coordinate={pontos[11]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 40.2104529,
            longitude: -8.4259382
          }} />
        <Marker
          onPress={() => bottomSheet13.current.show()}
          coordinate={pontos[12]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 40.2055695,
            longitude: -8.4234437
          }} />
        <Marker
          onPress={() => bottomSheet14.current.show()}
          coordinate={pontos[13]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 41.1673801,
            longitude: -8.7126517
          }} />
        <Marker
          onPress={() => bottomSheet15.current.show()}
          coordinate={pontos[14]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 37.130761,
            longitude: -8.240604
          }} />
        <Marker
          onPress={() => bottomSheet16.current.show()}
          coordinate={pontos[15]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 41.1598684,
            longitude: -8.6609119
          }} />
        <Marker
          onPress={() => bottomSheet17.current.show()}
          coordinate={pontos[16]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 40.651061,
            longitude: -8.625669
          }} />
        <Marker
          onPress={() => bottomSheet18.current.show()}
          coordinate={pontos[17]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 38.776022,
            longitude: -9.113296
          }} />
        <Marker
          onPress={() => bottomSheet19.current.show()}
          coordinate={pontos[18]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 41.1639669,
            longitude: -8.6962312
          }} />
        <Marker
          onPress={() => bottomSheet20.current.show()}
          coordinate={pontos[19]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 41.558954,
            longitude: -8.430377
          }} />
        <Marker
          onPress={() => bottomSheet21.current.show()}
          coordinate={pontos[20]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 41.489564,
            longitude: -7.180113
          }} />
        <Marker
          onPress={() => bottomSheet22.current.show()}
          coordinate={pontos[21]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 41.299991,
            longitude: -7.736297
          }} />
        <Marker
          onPress={() => bottomSheet23.current.show()}
          coordinate={pontos[22]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 40.549128,
            longitude: -7.244423
          }} />
        <Marker
          onPress={() => bottomSheet24.current.show()}
          coordinate={pontos[23]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 39.824118,
            longitude: -7.509136
          }} />
        <Marker
          onPress={() => bottomSheet25.current.show()}
          coordinate={pontos[24]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 38.5633161,
            longitude: -7.9257902
          }} />
        <Marker
          onPress={() => bottomSheet26.current.show()}
          coordinate={pontos[25]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 39.7523303,
            longitude: -8.8776143
          }} />
        <Marker
          onPress={() => bottomSheet27.current.show()}
          coordinate={pontos[26]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 39.293705,
            longitude: -7.428378
          }} />
        <Marker
          onPress={() => bottomSheet28.current.show()}
          coordinate={pontos[27]}
          pinColor='#3CB371'
          draggable={true}>
        </Marker>
        <Circle
          center={{
            latitude: 39.233839,
            longitude: -8.676134
          }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
  },
  mapview: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#D21E1F',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    borderRadius: 10,
    top: -60
  }
});