// import React, {useEffect, useState} from 'react';
// import {Alert, Text, BackHandler, View, ScrollView} from 'react-native';
// import {styles} from './style';
// import Books from 'components/BooksVList';
// import Book1 from 'assets/images/temporary/one.png';
// import Book2 from 'assets/images/temporary/two.png';
// import Book3 from 'assets/images/temporary/three.png';
// import Button from 'components/Button';

// const ImageDescription = () => {
//   return (
//     <View style={styles.imageDescContainer}>
//       <Text style={styles.time}>اکنون</Text>
//       <Text style={styles.name}>فاضل نظری</Text>
//       <Button
//         height={20}
//         width={70}
//         btnType="borderBlack"
//         title="20,000 تومان"
//         fontWeight="400"
//         fontSize={9}
//         lineHeight={16}
//         marginTop={8}
//       />
//       <Text style={styles.discount}>25,000 تومان</Text>
//     </View>
//   );
// };

// const arr = [
//   {
//     id: 0,
//     src: Book1,
//     imgTitle: 'اکنون',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
//   {
//     id: 1,
//     src: Book2,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
//   {
//     id: 2,
//     src: Book3,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
//   {
//     id: 3,
//     src: Book2,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//   },
//   {
//     id: 4,
//     src: Book3,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
//   {
//     id: 5,
//     src: Book2,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
//   {
//     id: 6,
//     src: Book3,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
//   {
//     id: 7,
//     src: Book2,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
//   {
//     id: 8,
//     src: Book2,
//     imgTitle: 'رویای نیمه شب',
//     author: 'فاضل نظری',
//     TextComponent: <ImageDescription />,
//   },
// ];

// const EditText = ({navigation}: any) => {
//   useEffect(() => {
//     navigation.setOptions({tabBarLabel: 'وحید یامین پور'});
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>بیوگرافی وحید یامین پور</Text>
//       <Text style={styles.desc}>
//         داستان جالبی بود در عین سادگی جذابیت زیادی داشتی و میتونستی میتونست یکم
//         طولانیتر باشه و ادامه پیدا کنه ولی در کل ادامه پیدا بوده و بهه همه
//         پیشنهاد میدم بخونش ترجمه خوبی داشت و همینی جاهایی اشتباه تایپی داشت .
//         داستان جالبی بود در عین سادگی جذار زیادی داشتی و میتونستی میتونست یکم
//         طولانیتر باشه و ادامه پیدا ترجمه خوبی داشت و همین جاهایی اشتباه تایپی
//         داشت ... بیشتر
//       </Text>
//       <Text style={styles.booksTitle}>کتاب ها</Text>
//       <Books arr={arr} />
//     </ScrollView>
//   );
// };

// export default EditText;

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import type {PropsWithChildren} from 'react';

const DirectionLayout = () => {
  const [direction, setDirection] = useState('ltr');
  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={['ltr', 'rtl']}
      setSelectedValue={setDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => {

  return (
    <View style={{padding: 10, flex: 1}}>
      <Text style={styles.label}>{label}-jhgjhg</Text>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    // marginTop: 8,
    // backgroundColor: 'aliceblue',
    // direction: 'rtl',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
    // display: 'flex',
    // overflow: 'scroll',
    // flexDirection: 'row-reverse',
    // width: 500,
    // width: 60,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default DirectionLayout;
