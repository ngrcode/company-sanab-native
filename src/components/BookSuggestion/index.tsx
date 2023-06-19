import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import Title from './Title';
import book1 from 'assets/images/home/suggestion1.png';

const arr = [book1, book1, book1, book1];

const BookSuggestion = (props: any) => {
  const {t} = useTranslation();

  return (
    <View style={[styles.container, {...props}]}>
      <Title />
      <ScrollView
        horizontal={true}
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginRight: -10,
        }}>
        {arr.map((item: any, i: number) => {
          return (
            <Image
              key={i}
              source={item}
              style={{
                width: 196,
                height: 94,
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BookSuggestion;
