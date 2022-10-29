import React, {useState} from 'react';
import {FlatList, ScrollView, View, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FavoriteItem from '../../../components/FavoriteItem';
import {products} from '../../../data/products';

const Favorites = ({navigation}) => {
  const renderItem = ({item}) => {
    return <FavoriteItem {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => String(item?.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
