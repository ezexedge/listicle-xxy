import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = ({navigation}) => {


  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
