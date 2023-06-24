import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackHandler, ScrollView} from 'react-native';
import {useGetPublisherBooksQuery} from 'services/book.service';
import BooksVList from 'components/BooksVList';

function PublisherBooks(props: any) {
  const {paramsRoute, exParams} = props;
  const {publisherName, publisherId} = paramsRoute;
  const navigation = useNavigation();
  const {data: publisherBooks} = useGetPublisherBooksQuery(publisherId);

  useEffect(() => {
    navigation.setOptions({title: publisherName});
  }, [navigation]);

  return (
    <ScrollView>
      <BooksVList books={publisherBooks?.data} headerTitle={publisherName} />
    </ScrollView>
  );
}
export default PublisherBooks;
