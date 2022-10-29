import React, {useEffect, useState} from 'react';
import {ScrollView, Text, FlatList, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
import {products} from '../../../data/products';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        title={item?.title}
        image={item?.image}
        isFirst={index === 0}
      />
    );
  };
  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} />;
  };
  return (
    <SafeAreaView>
      <Header
        onSearch={setKeyword}
        keyword={keyword}
        showSearch
        title="Busca"
        showLogout
      />
      <FlatList
        style={styles.list}
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />
      <FlatList
        style={styles.productsList}
        numColumns={2}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
