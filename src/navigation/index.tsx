import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import PostScreen from "../screens/Post";
import { AppScreens } from "./AppScreensEnum";
import { RootStackParamList } from "./ScreensProps";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import { Easing } from "react-native-reanimated";

const RootStack = createStackNavigator<RootStackParamList>();

const RootFlowNavigator: React.FunctionComponent = () => {
  const config: TransitionSpec = {
    animation: "timing",
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{
        animationEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: { open: config, close: config },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <RootStack.Screen name={AppScreens.Home} component={HomeScreen} />
      <RootStack.Screen name={AppScreens.Post} component={PostScreen} />
    </RootStack.Navigator>
  );
};
export default RootFlowNavigator;
