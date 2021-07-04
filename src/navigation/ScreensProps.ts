import { IPost } from "./../types/index";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppScreens } from "./AppScreensEnum";

export type RootStackParamList = {
  Home: undefined;
  Post: {
    post: IPost;
  };
};

type PostScreenRouteProp = RouteProp<RootStackParamList, AppScreens.Post>;
type PostScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  AppScreens.Post
>;

export type PostProps = {
  route: PostScreenRouteProp;
  navigation: PostScreenNavigationProp;
};
