import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import ShoeItem from "../ShoeItem";

import style from './style';
import Shoe from './Shoe';
import Header from '../Header';
const ShoeList = (props) => {
  return (
    <View style={style.container}>
         <Header />
      <FlatList
        data={Shoe}
        renderItem={({item}) => <ShoeItem Shoe={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default ShoeList;