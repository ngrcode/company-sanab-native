import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {styles} from './style';
import Book1 from 'assets/images/temporary/one.png';
import Book2 from 'assets/images/temporary/two.png';
import Book3 from 'assets/images/temporary/three.png';

const arr = [
  {
    id: 0,
    src: Book1,
    imgTitle: 'اکنون',
    author: 'فاضل نظری',
  },
  {
    id: 1,
    src: Book2,
    imgTitle: 'رویای نیمه شب',
    author: 'فاضل نظری',
  },
  {
    id: 2,
    src: Book3,
    imgTitle: 'رویای نیمه شب',
    author: 'فاضل نظری',
  },
  {
    id: 3,
    src: Book2,
    imgTitle: 'رویای نیمه شب',
    author: 'فاضل نظری',
  },
  {
    id: 4,
    src: Book3,
    imgTitle: 'رویای نیمه شب',
    author: 'فاضل نظری',
  },
  {
    id: 5,
    src: Book2,
    imgTitle: 'رویای نیمه شب',
    author: 'فاضل نظری',
  },
  {
    id: 6,
    src: Book3,
    imgTitle: 'رویای نیمه شب',
    author: 'فاضل نظری',
  },
  {
    id: 7,
    src: Book2,
    imgTitle: 'رویای نیمه شب',
    author: 'فاضل نظری',
  },
];

function PurchaseTab() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {arr.map((item: any) => (
          <View style={styles.imgBlockWrapper} key={item.id}>
            <View style={styles.imgBlock}>
              <Image style={styles.img} key={item.id} source={item.src} />
            </View>
            <Text style={styles.title}>{item.imgTitle}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
export default PurchaseTab;
