import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {styles} from './style';

const Input = (props: any) => {
  const {defaultValue, onChangeText, placeholder, ...rest} = props;
  const [value, setValue] = useState(defaultValue || '');

  const onChange = (e: string) => {
    setValue(e);
    onChangeText(e);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={[styles.input, {...rest}]}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        // keyboardType="TEX"
      />
    </SafeAreaView>
  );
};

export default Input;
