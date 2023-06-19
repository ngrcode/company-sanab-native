import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

const AudioBook = () => {
  const {t} = useTranslation();

  return (
    <ScrollView>
      <Text>audioBook</Text>
    </ScrollView>
  );
};

export default AudioBook;
