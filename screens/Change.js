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


const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');


const Change= ({navigation}) =>{
    return(
       
        <SafeAreaView style={styles.container}>
            <View style= {styles.Backmoment} >
            </View>
             
            <ScrollView contentContainerStyle= {styles.container}>
            <View style = {styles.bienvenida}>
                <Text style ={styles.TitleAntesDC}>Elige la calculadora que deceas utilizar</Text>
            </View>          
            <View style = {styles.containerbuttons}>
                <TouchableOpacity style= {styles.BtnEtiqueta} onPress= {()=> navigation.navigate('CalculadoraNormal')}><Text style= {styles.TextoEtiqueta}>Calculadora Normal</Text></TouchableOpacity>
                <TouchableOpacity style= {styles.BtnEtiqueta} onPress= {()=> navigation.navigate('CalculadoraCientifica')}><Text style= {styles.TextoEtiqueta}>Calculadora Cientifica</Text></TouchableOpacity>
            </View>
                
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    
    Backmoment:{
        width: width,
        alignItems: 'flex-start'
    },
    Back:{
        width: 50
    },
    bienvenida:{
      marginTop: '5%',
      width: width*0.9,
      alignItems: 'center',
      marginBottom: 20
    },
    TitleAntesDC:{
        fontFamily: 'Roboto'
    },
    TitleRoboto:{
      fontWeight: '800',
      fontSize: 24,
      color: '#FF5400',
      fontFamily: 'Roboto',
      textAlign: 'center'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      width: width,
      backgroundColor: '#fff',
    },
    containerbuttons:{
        height: height*0.18,
    },
    BtnEtiqueta:{
        alignItems: 'center',
        padding:10,
        width: 300,
        height: 50,
        borderColor: '#FF0054',
        borderWidth: 2,
        borderRadius: 40,
        marginBottom: 20
    },
    TextoEtiqueta:{
        fontFamily: 'Roboto',
        fontSize: 20,
    },

    
   
    
});

export default Change;