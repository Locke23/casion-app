import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { AppScreens } from "../../navigation/AppScreensEnum";
import { RootStackParamList } from "../../navigation/ScreensProps";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import Featured from "../../components/FeaturedPost";
import postData from "../../__MoCK__/posts.json";

import { ScrollableScreen } from "../../components/Screen";
import { hp } from "../../utils/dimensions";
import { IPost } from "../../types";
import { GetAllPosts } from "../../services/api";

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  AppScreens.Home
>;
interface HomeScreenProps {
  navigation: HomeScreenNavigationProps;
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [posts, setPosts] = useState<IPost[]>(postData);

  const goToPost = (post: IPost) => {
    navigation.navigate(AppScreens.Post, {
      post,
    });
  };

  const getData = async () => {
    const data = await GetAllPosts();
    if (data) {
      setPosts(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <ScrollableScreen
        contentContainerStyle={{ paddingBottom: hp(75), paddingTop: hp(15) }}
        contentInsetAdjustmentBehavior="never"
      >
        <Header canGoback={navigation.canGoBack()} />
        <Featured post={posts[0]} goToPostPage={() => goToPost(posts[0])} />
        <PostList posts={posts} goToPost={goToPost} />
      </ScrollableScreen>
    </View>
  );
};

export default Home;
