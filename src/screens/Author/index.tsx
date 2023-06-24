import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import {useGetAuthorBooksQuery} from 'services/book.service';
import BooksVList from 'components/BooksVList';
import {ScrollView} from 'react-native';
import Loading from 'components/Loading';
import {backHandlerMethod} from 'utils/common.utils';

function Author(props: any) {
  const {paramsRoute, exParams} = props;
  const {authorName, authorId} = paramsRoute;
  const navigation = useNavigation();
  const {data: authorBooks, isLoading} = useGetAuthorBooksQuery(authorId);

  useEffect(() => {
    navigation.setOptions({title: authorName});
  }, [navigation]);

  useEffect(() => {
    backHandlerMethod(navigation, 'category', exParams.vCategory);
    const backAction = (e: any) => {
      navigation.navigate('category', exParams.vCategory);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <ScrollView>
      <Loading loading={isLoading} />
      <BooksVList books={authorBooks?.data} headerTitle={authorName} />
    </ScrollView>
  );
}
export default Author;
