import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {styles, inputStyles} from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

const SearchInput = ({setParams}: any) => {
  const [value, setValue] = useState('');

  const onChange = (e: any) => {
    setValue(e);
    setParams((prevState: any) => {
      return {...prevState, s: e};
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <View style={[inputStyles(value).inputIconBlock, styles.searchIcon]}>
          <Icon name="search1" style={[styles.inputIcons, styles.searchIcon]} />
        </View>
        <View style={inputStyles(value).inputIconBlock}>
          <IconSimple
            name="close"
            style={[styles.inputIcons, styles.cancelIcon]}
          />
        </View>
        <TextInput
          style={inputStyles(value).input}
          onChangeText={onChange}
          value={value}
          placeholder="نام کتاب , نویسنده , مترجم , ناشر و ..."
          inlineImageLeft="search_icon"
        />
      </View>
    </View>
  );
};

export default SearchInput;
