import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';

export default class PDFExample extends React.Component {
  render() {
    const source = {
      uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
      cache: true,
    };

    return (
      <View style={styles.container}>
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.info(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.info(`Current page: ${page}`);
          }}
          onError={error => {
            console.info(error);
          }}
          onPressLink={uri => {
            console.info(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
