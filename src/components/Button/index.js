import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, style}) => {
  console.log('pepaaa');
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
//ss
export default React.memo(Button);
