import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


import { useAuth } from '../../context/auth';
import {
  Container,
  LoginWithGoogleButtonText,
  ContainerLogo,
  GoogleLogo
} from './styles';

export function LoginWithGoogleButton () {
  const { userInfo, setUserInfo } = useAuth();

  async function handleLoginWithGoogle () {

    GoogleSignin.configure({
      webClientId: process.env.WEB_CLIENT_ID,
      scopes: ['email', 'profile']
    });

    try {

      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      console.log(response);

      setUserInfo(response);

    } catch (error: any) {

      console.log('ERRO!!!')

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log(error);
      }
    }
  
  }

  return (
    <Container onPress={handleLoginWithGoogle}>
      <ContainerLogo>
        <GoogleLogo />
      </ContainerLogo>
      <LoginWithGoogleButtonText>Entrar com google</LoginWithGoogleButtonText>
    </Container>
  )
}