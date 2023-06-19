import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import {useTheme} from '@react-navigation/native';

interface Props {
  loading: boolean;
}

const Loading = (props: Props) => {
  const {loading} = props;
  const theme = useTheme();

  return (
    <View style={styles(loading).container}>
      <View style={styles(loading).centeredView}>
        <View>
          <ActivityIndicator color={theme.colors.blue[0]} size="large" />
        </View>
      </View>
    </View>
  );
};

export default Loading;
