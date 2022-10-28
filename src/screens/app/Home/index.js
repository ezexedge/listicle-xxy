import React, {useState} from 'react';
import {ScrollView, Text,FlatList} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { categories } from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';

const Home = ({navigation}) => {

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox
             
                title={item?.title} 
                image={item?.image} 
            />
        )
    }

  return (
    <SafeAreaView>
        <Header showSearch title="Busca" showLogout />
        <FlatList 
                style={styles.list} 
                horizontal 
                data={categories} 
                renderItem={renderCategoryItem} 
                keyExtractor={(item, index) => String(index)} 
            />

    </SafeAreaView>
  );
};

export default React.memo(Home);
