import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import style from './style';


const ShoeItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.Shoe;

  return (
    <View style={style.shoeContainer}>
      <ImageBackground
        source={image}
        style={style.image}
      />
     

      <View style={style.titles}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.subtitle}>
          {tagline}
          {' '}
          <Text style={style.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={style.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Check Cart"}
          onPress={() => {
            console.warn("Check Cart was pressed");
          }}
        />
      </View>

    </View>
  );
};

export default ShoeItem;