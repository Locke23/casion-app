import React from "react";
import Cover from "../../components/Cover";
import Chip from "../../components/Chip";
import { PostFeatured, PostAction } from "../../components/Base";
import { Container, ReadRow } from "./styles";
import ArrowLeft from "../../../assets/icons/ArrrowLeft";
import { TouchableWithoutFeedback } from "react-native";
import { IPost } from "../../types";

interface FeaturedProps {
  post: IPost;
  goToPostPage: () => void;
}

const FeaturedPost: React.FC<FeaturedProps> = ({ post, goToPostPage }) => {
  return (
    <TouchableWithoutFeedback onPress={goToPostPage}>
      <Container>
        <Cover type="banner" img_url={post.img_cover} />
        <Chip content="Destaque" />
        <PostFeatured>
          Descubra o sabor de rosquinha que melhor te representa!
        </PostFeatured>
        <ReadRow>
          <PostAction>Leia agora</PostAction>
          <ArrowLeft style={{ transform: [{ rotateY: "180deg" }] }} />
        </ReadRow>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default FeaturedPost;
