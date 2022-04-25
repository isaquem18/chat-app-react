import { useAuth } from '../../context/auth';
import { 
  Container,
  UserAvatar,
  UserName,
  UserEmail
} from './styles';

export function Home () {
  const { userInfo, setUserInfo } = useAuth()

  return (
    <Container>
      <UserAvatar source={{uri: userInfo?.user?.photo }}/>
      <UserName>{userInfo.user?.name}</UserName>
      <UserEmail>{userInfo.user?.email}</UserEmail>
    </Container>
  )
}
