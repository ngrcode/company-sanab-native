import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import Loading from 'components/Loading';

function Author() {
  return (
    <View style={styles.container}>
      <Loading loading={isLoading} />
      <Text>author</Text>
    </View>
  );
}
export default Author;
