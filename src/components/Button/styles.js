import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.blue,
    paddingVertical: 20,
    borderRadius: 8,
    width: '100%',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
