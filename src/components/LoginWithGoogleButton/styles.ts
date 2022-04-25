import styled from 'styled-components/native';
import GoogleSvg from '../../assets/images/google.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 100%;
  height: 60px;
  background-color: #00000015;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px #000;
`;

export const LoginWithGoogleButtonText = styled.Text`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.poppins600};
  font-size: ${RFValue(14)}px;
`;

export const ContainerLogo = styled.View`
  position: absolute;
  left: 0;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: #00000020;
  width: 17%;
`;

export const GoogleLogo = styled(GoogleSvg)`
  width: 30px;
  height: 30px;
`;