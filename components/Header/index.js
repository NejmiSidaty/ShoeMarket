import React from 'react';
import {View, Image,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './style';

const Header = () => {
    const navigation = useNavigation(); 
  return (
    <View style={style.container}>
      <Button
            title="HOME"
            style={style.home}
            onPress={() =>
            navigation.navigate('Home')}/>
      <Image style={style.menu} source={require('../../assets/images/menu.png')} />
    </View>
  );
};

export default Header;