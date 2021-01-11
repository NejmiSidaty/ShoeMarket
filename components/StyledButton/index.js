import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './style';

const StyledButton = (props) => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#141B41' : '#E0E4F5';
  const textColor = type === 'primary' ? '#E0E4F5': '#141B41';

  return (
    <View style={style.container}>
      <Pressable
        style={[style.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[style.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;