import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { IPost } from "../../types";
import { PostSection, PostPreview, Row } from "../Base";
import Cover from "../Cover";
import Chip from "../Chip";
import { Container, Content, ItemPreview, ImageContainer } from "./styles";

interface PostListProps {
  posts?: IPost[];
  goToPost: (post: IPost) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, goToPost }) => {
  return (
    <Container>
      <PostSection>Todas as notícias</PostSection>
      {posts &&
        posts.map((post) => (
          <TouchableWithoutFeedback
            key={post.id}
            onPress={() => goToPost(post)}
          >
            <ItemPreview>
              <ImageContainer>
                <Cover type="mini" img_url={post.img_mini} />
              </ImageContainer>
              <Content>
                <Chip content={post.category} />
                <PostPreview>{post.title}</PostPreview>
              </Content>
            </ItemPreview>
          </TouchableWithoutFeedback>
        ))}
    </Container>
  );
};

export default PostList;
