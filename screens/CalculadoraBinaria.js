import * as React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    TextInput,
  } from 'react-native';
import {create, all} from 'mathjs';
  
const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const Mathjs = create(all);


const CalculadoraBinaria = ({navigation}) =>{
    return(
    <Text>Waza binaria</Text>
    )
}

export default CalculadoraBinaria;