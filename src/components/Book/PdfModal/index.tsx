import React, {useState, useEffect} from 'react';
import {Modal, View} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

import {styles} from './style';
import PdfReader from 'components/PdfReader';
import EpubReader from 'components/EpubReader';
import {usePutBookPageNumberMutation} from 'services/book.service';

export default function PdfModal(props: any) {
  const {showPdf, setShowPdf, fileSrc, bookId, pageCfi} = props;
  const [pageAndCfi, setPageAndCfi] = useState(pageCfi);
  const [putPageNumber, {data}] = usePutBookPageNumberMutation();

  const extension = fileSrc.split('/').pop().split('.').pop();

  useEffect(() => {
    setPageAndCfi(pageCfi);
  }, [pageCfi]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showPdf}
        onRequestClose={() => {
          setShowPdf(!showPdf);
        }}>
        <View style={styles.modalView}>
          <IconAnt
            name="closecircleo"
            style={styles.closeIcon}
            onPress={() => {
              setShowPdf(false);
              putPageNumber({pageAndCfi, bookId}).then((res: any) => {
                console.info('res', res);
                console.info('error', res?.error);
              });
            }}
          />
          {extension === 'pdf' ? (
            <PdfReader
              pdfUri={fileSrc}
              curPage={pageAndCfi}
              setCurPage={setPageAndCfi}
            />
          ) : (
            <EpubReader
              epubSrc={fileSrc}
              page={pageAndCfi}
              setPage={setPageAndCfi}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}
