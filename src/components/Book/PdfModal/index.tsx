import React, {useState, useEffect} from 'react';
import {Modal, View} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

import {styles} from './style';
import PdfReader from 'components/PdfReader';
import EpubReader from 'components/EpubReader';
import {usePutBookPageNumberMutation} from 'services/book.service';

export default function PdfModal(props: any) {
  const {showPdf, setShowPdf, fileSrc, bookId, pageNumber} = props;
  const [page, setPage] = useState(pageNumber);
  const [putPageNumber, {data}] = usePutBookPageNumberMutation();

  const extension = fileSrc.split('/').pop().split('.').pop();

  useEffect(() => {
    setPage(pageNumber);
  }, [pageNumber]);

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
              putPageNumber({page, bookId}).then((res: any) => {
                console.info(res);
              });
            }}
          />
          {extension === 'pdf' ? (
            <PdfReader pdfUri={fileSrc} curPage={page} setCurPage={setPage} />
          ) : (
            <EpubReader epubSrc={fileSrc} page={page} setPage={setPage} />
          )}
        </View>
      </Modal>
    </View>
  );
}
