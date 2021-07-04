import React, { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { PostProps } from "../../navigation/ScreensProps";
import Header from "../../components/Header";
import Cover from "../../components/Cover";
import Chip from "../../components/Chip";
import { PostTitle, PostSubTitle, PostContent } from "../../components/Base";
import { ScrollableScreen } from "../../components/Screen";
import { hp, wp } from "../../utils/dimensions";

const Post: React.FC<PostProps> = ({ navigation, route }) => {
  const { post } = route.params;
  const goBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollableScreen
        contentContainerStyle={{ paddingBottom: hp(75), paddingTop: hp(15) }}
        contentInsetAdjustmentBehavior="never"
      >
        <Header canGoback={navigation?.canGoBack() || true} goBack={goBack} />
        <Cover img_url={post.img_cover} type="banner" />
        <Chip content={post.category} />
        <PostTitle>{post.title}</PostTitle>
        <PostSubTitle>{post.subtitle}</PostSubTitle>
        <PostContent>{post.subject}</PostContent>
      </ScrollableScreen>
    </SafeAreaView>
  );
};

export default Post;
