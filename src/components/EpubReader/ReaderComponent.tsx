import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {Reader, useReader} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';

export default function ReaderComponent(props: any) {
  const {epubSrc, page, setPage} = props;
  const {width, height} = useWindowDimensions();
  const onLocationChange = (e: any, a: any) => {
    setPage({cfi: a.start.cfi, pageNumber: 0});
  };

  return (
    <Reader
      src={epubSrc}
      enableSwipe={true}
      width={width}
      height={height}
      fileSystem={useFileSystem}
      initialLocation={page.cfi}
      onLocationChange={(e: any, a: any) => onLocationChange(e, a)}
    />
  );
}
