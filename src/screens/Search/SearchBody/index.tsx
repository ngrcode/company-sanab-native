import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {styles, labelStyles} from './style';
import {routes, criterias} from 'utils/search.utils';

const SearchBody = ({setParams}: any) => {
  const [filters, setFilters] = useState(['all']);

  const onPressBtn = (e: any, key: any) => {
    setFilters((prev: any) => {
      if (prev.includes(key)) {
        const curIndex = prev.indexOf(key);
        prev.splice(curIndex);
        return [...prev];
      }
      if (prev.includes('text')) return ['text', key];
      if (prev.includes('sound')) return ['sound', key];
      return [key];
    });
    setParams((prevState: any) => {
      return {...prevState, criteria: key};
    });
  };

  const onPressAudio = (e: any, key: any) => {
    setFilters((prevState: any) => {
      if (key === 'sound') {
        if (prevState.includes('text')) {
          const index = prevState.indexOf('text');
          prevState.splice(index, 1);
          setParams((prev: any) => {
            return {...prev, bookType: 'sound'};
          });
          return [...prevState, key];
        }
        if (prevState.includes('sound')) {
          const index = prevState.indexOf('sound');
          prevState.splice(index, 1);
          setParams((prev: any) => {
            return {...prev, bookType: 'all'};
          });
          return [...prevState];
        } else {
          setParams((prev: any) => {
            return {...prev, bookType: key};
          });
          return [...prevState, key];
        }
      } else {
        //text
        if (prevState.includes('sound')) {
          const index = prevState.indexOf('sound');
          prevState.splice(index, 1);
        }
        if (prevState.includes('text')) {
          const index = prevState.indexOf('text');
          prevState.splice(index, 1);
          setParams((prev: any) => {
            return {...prev, bookType: 'all'};
          });
          return [...prevState];
        } else {
          setParams((prev: any) => {
            return {...prev, bookType: key};
          });
          return [...prevState, key];
        }
      }
    });
  };

  return (
    <View style={styles.block}>
      {routes.map((route: any) => (
        <Pressable
          style={labelStyles(filters.includes(route.key)).container}
          onPress={e => onPressBtn(e, route.key)}
          key={route.key}>
          <Text style={labelStyles(filters.includes(route.key)).label}>
            {route.title}
          </Text>
        </Pressable>
      ))}
      {criterias.map((route: any) => (
        <Pressable
          style={labelStyles(filters.includes(route.key)).container}
          onPress={e => onPressAudio(e, route.key)}
          key={route.key}>
          <Text style={labelStyles(filters.includes(route.key)).label}>
            {route.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SearchBody;
