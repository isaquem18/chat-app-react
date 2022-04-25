import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignOutWithGoogleButton } from '../../components/SignOutWithGoogleButton';

//ROUTES
import { Chat } from '../../screens/Chat';
import { Feed } from '../../screens/Feed';
import { Home } from '../../screens/Home';

const {
  Navigator,
  Screen
} = createBottomTabNavigator();

export function BottomTabRoutes () {

  return (
    <>
      <Navigator>
        <Screen name="Home" component={Home}/>
        <Screen name="Chat" component={Chat}/>
        <Screen name="Feed" component={Feed}/>
      </Navigator>
      <SignOutWithGoogleButton />
    </>
  )
};
