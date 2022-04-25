import { StatusBar } from "react-native";

import { useAuth } from '../context/auth';
import { StackRoutes } from "./StackRoutes"

export function Routes () {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <StackRoutes />
    </>
  )
};
