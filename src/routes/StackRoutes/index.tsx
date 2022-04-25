import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import { useAuth } from '../../context/auth';

//ROUTES
import { Login } from '../../screens/Login';
import { BottomTabRoutes } from '../BottomTabRoutes';

const {
  Navigator,
  Screen
} = createNativeStackNavigator();

export function StackRoutes () {

  // Set an initializing state whilst Firebase connects
  const { userInfo, setUserInfo } = useAuth();
  const [ initializing, setInitializing ] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(userInfo: any) {
    setUserInfo(userInfo);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  if (!userInfo) {

    console.log(userInfo);

    return (
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name="Login" component={Login} />
      </Navigator>
    );

  } else {

    return (
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name="BottomTabRoutes" component={BottomTabRoutes} />
      </Navigator>
    );
    

  }



}