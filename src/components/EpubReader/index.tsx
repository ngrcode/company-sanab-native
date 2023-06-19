import * as React from 'react';

import {SafeAreaView, useWindowDimensions} from 'react-native';
import {Reader, ReaderProvider} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';

export default function App(props) {
  const {epubSrc} = props;
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      <ReaderProvider>
        <Reader
          // src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          src={epubSrc}
          enableSwipe={true}
          width={width}
          height={height}
          fileSystem={useFileSystem}
        />
      </ReaderProvider>
    </SafeAreaView>
  );
}
