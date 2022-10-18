import {Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Signup = ({navigation}) => {
  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="sign up" />
        <Input label="Name" placeholder="John Doe" />
        <Input label="E-mail" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="*******" />

        <Button style={styles.button} title="Sign Up" />
        <Separator text="Or sign up with" />

        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {' '}
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
