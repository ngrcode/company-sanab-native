import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {ReaderProvider} from '@epubjs-react-native/core';

import ReaderComponent from './ReaderComponent';

export default function EpubReader(props: any) {
  const {epubSrc, page, setPage} = props;

  return (
    <SafeAreaView>
      <ReaderProvider>
        <ReaderComponent epubSrc={epubSrc} page={page} setPage={setPage} />
      </ReaderProvider>
    </SafeAreaView>
  );
}
