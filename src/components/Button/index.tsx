import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {styles} from './style';

type BtnType = 'default' | 'blueBorder' | 'defaultGray';
interface Props {
  title: any;
  btnType: BtnType;
  onPress: Function;
  fontSize?: number;
}

const Button = (props: any) => {
  const {btnType, title, onPress, ...rest} = props;
  const funcStyles = (pressed: any) => styles(btnType, pressed, rest);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => funcStyles(pressed).pressable}>
      {({pressed}) => <Text style={funcStyles(pressed).text}>{title}</Text>}
    </Pressable>
  );
};

export default Button;
