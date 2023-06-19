import React, {useState} from 'react';
import {Text, View, useWindowDimensions, Pressable} from 'react-native';
import {SceneMap} from 'react-native-tab-view';
import {styles, labelStyles} from './style';
import {useTheme} from '@react-navigation/native';
import SearchAuthor from 'screens/Search/SearchAuthor';
import {routes, criterias} from 'utils/search.utils';
import SearchBookList from 'screens/Search/SearchBookList';
import {useTranslation} from 'react-i18next';

const renderScene = SceneMap({
  one: SearchAuthor,
  two: SearchBookList,
  three: SearchBookList,
  four: SearchAuthor,
  five: SearchAuthor,
});

const SearchNotFound = ({params, setParams, data}: any) => {
  const {t} = useTranslation();
  const layout = useWindowDimensions();
  const theme = useTheme();
  const {colors} = theme;
  const [filters, setFilters] = useState(['all']);

  const onPressBtn = (e: any, key: any) => {
    if (key === 'all') {
      setFilters(['all']);
      setParams((prevState: any) => {
        return {...prevState, bookType: 'all'};
      });
    } else {
      setFilters((prevState: any) => {
        const allIndex = prevState.indexOf('all');
        prevState.splice(allIndex);
        if (prevState.includes(key)) {
          const curIndex = prevState.indexOf(key);
          prevState.splice(curIndex);
          return [...prevState];
        } else {
          return [...prevState, key];
        }
      });
      setParams((prevState: any) => {
        return {...prevState, criteria: key};
      });
    }
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
      <Text style={styles.text}>{t('gl.noData')}</Text>
    </View>
  );
};

export default SearchNotFound;
