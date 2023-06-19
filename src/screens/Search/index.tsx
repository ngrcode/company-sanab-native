import React, {useState, useEffect, useEffectEvent} from 'react';
import SearchBody from 'screens/Search/SearchBody';
import SearchContent from 'screens/Search/SearchContent';
import SearchCategories from 'screens/Search/SearchCategories';
import SearchHeader from 'screens/Search/SearchInput';
import {useGetSearchBooksQuery} from 'services/book.service';
// import Loading from 'components/Loading';
import SearchBookList from 'screens/Search/SearchBookList';
import SearchAuthor from 'screens/Search/SearchAuthor';
import SearchNotFound from 'screens/Search/SearchNotFound';

const Search = () => {
  const [params, setParams] = useState({
    s: '',
    criteria: 'all',
    bookType: 'all',
    limit: 100,
    page: 1,
  });

  const {data, refetch, isLoading, isSuccess, isFetching, error} =
    useGetSearchBooksQuery({
      ...params,
    });
  return (
    <>
      <SearchHeader setParams={setParams} />
      {/* <SearchBody setParams={setParams} /> */}
      {data?.data?.length === 0 && <SearchNotFound />}
      {params.criteria !== 'author' && params.criteria !== 'publisher' && (
        <SearchBookList
          data={data}
          isFetching={isFetching}
          isLoading={isLoading}
        />
      )}
      {(params.criteria === 'author' || params.criteria === 'publisher') && (
        <SearchAuthor data={data} />
      )}

      {/* <SearchCategories params={params} setParams={setParams} data={data} /> */}
      {/* <SearchContent params={params} setParams={setParams} data={data} /> */}
    </>
  );
};

export default Search;
