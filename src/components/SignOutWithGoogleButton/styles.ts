import styled from 'styled-components/native';
import GoogleSvg from '../../assets/images/google.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 100px;
  height: 40px;
  background-color: #ce424a;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  right: 20px;

`;

export const SignOutWithGoogleButtonText = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.poppins600};
  font-size: ${RFValue(14)}px;
`;
