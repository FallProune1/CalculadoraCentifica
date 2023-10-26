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
import { Select } from './iconos/Select';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const Mathjs = create(all);

const CalculadoraNormal = ({navigation}) =>{
  const [input, setInput] = React.useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setInput(String(Mathjs.evaluate(input)));
      } catch (error) {
        setInput("Error");
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return(
    <SafeAreaView style={styles.container}>    
        <ScrollView contentContainerStyle= {styles.container}>
        <View style = {styles.bienvenida} >
            <TouchableOpacity onPress= {()=> navigation.navigate('Change')}>
            <Text style ={styles.TitleAntesDC} >Calculadora Normal <Select></Select></Text>
            </TouchableOpacity>
        </View>          
        <View style = {styles.containerbuttons}>
            <TextInput placeholder='Ingresa un numero' style= {styles.InputCalc} value={input}></TextInput>
            <View style = {styles.containerbuttonsRow}>
              <TouchableOpacity onPress={() => handlePress('7')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>7</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('8')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>8</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('9')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>9</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('*')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>*</Text></TouchableOpacity>
            </View>
            <View style = {styles.containerbuttonsRow}>
              <TouchableOpacity onPress={() => handlePress('4')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>4</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('5')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>5</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('6')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>6</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('/')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>/</Text></TouchableOpacity>
            </View>
            <View style = {styles.containerbuttonsRow}>
              <TouchableOpacity onPress={() => handlePress('1')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>1</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('2')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>2</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('3')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>3</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('-')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>-</Text></TouchableOpacity>
            </View>
            <View style = {styles.containerbuttonsRow}>
              <TouchableOpacity onPress={() => handlePress('0')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>0</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('C')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>C</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('+')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>+</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('=')} style= {styles.Botonnum}><Text style= {styles.TextoBtn}>=</Text></TouchableOpacity>
            </View> 
        </View>  
        </ScrollView>
    </SafeAreaView>
  )
}

// ... Tus estilos aquí ...


const styles = StyleSheet.create({
    
  bienvenida:{
    marginTop: '5%',
    width: width*0.9,
    alignItems: 'center',
    marginBottom: 20
  },
  TitleAntesDC:{
      fontSize:25,
      fontFamily:'Roboto',
      
  },
  InputCalc:{
    fontFamily: 'Roboto',
    width: width*0.6,
    height: 50,
    textAlign: 'right',
    fontSize: 20
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: width,
    backgroundColor: '#fff',
  },
  containerbuttons:{
      height: height*0.18,
      flex: 1,
      alignItems: 'center',
  },
  containerbuttonsRow:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  Botonnum:{
      alignItems: 'center',
      padding:10,
      width: 70,
      height: 70,
      borderColor: '#4D49FF',
      borderWidth: 2,
      borderRadius: 40,
      marginBottom: 20
  },
  TextoBtn:{
      fontFamily: 'Roboto',
      fontSize: 20,
  },

  
 
  
});


export default CalculadoraNormal;