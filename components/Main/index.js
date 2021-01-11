import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import style from "./style";
import { StatusBar } from 'expo-status-bar';


const Home = ({ navigation }) =>  {
      return (
        <View style={style.container}>
            
        <View style={style.MainContainer}>
         <ImageBackground
          source={require('../../assets/images/backgroundimage.jpeg')}
          style={style.image}
        />
         <View style={style.titles}>
        <Text style={style.title}>Sneak'in</Text>
        <Text style={style.subtitle}>CHECK SNEAKERS IN OUR APP</Text>
         </View>
         <View style={style.buttonsContainer}>
          <StyledButton
          type="primary"
          content={"Check Shoes"}
          onPress={() =>
            navigation.navigate('ShoeList')
          }
         /></View>
         <StatusBar style="auto" />
        </View>
        </View>
      );
    }
  
  export default Home;