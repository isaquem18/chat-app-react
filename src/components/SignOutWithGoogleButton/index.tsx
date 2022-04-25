import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useAuth } from '../../context/auth';
import {
  Container,
  SignOutWithGoogleButtonText
} from './styles';

export function SignOutWithGoogleButton () {
  const { setUserInfo } = useAuth();

  async function handleSignOutWithGoogle () {

    setUserInfo(null);

    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <Container onPress={handleSignOutWithGoogle}>
      <SignOutWithGoogleButtonText>Sair</SignOutWithGoogleButtonText>
    </Container>
  )
}