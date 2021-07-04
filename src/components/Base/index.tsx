import styled from "styled-components/native";
import { Colors } from "../../config/constants";
import { hp } from "../../utils/dimensions";

// View Groups
export const ScreenContainer = styled.View``;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

// Text Styles
export const PostTitle = styled.Text`
  font-family: "PTSerif_700Bold_Italic";
  font-size: 32px;
  font-style: italic;
  font-weight: 700;
  line-height: 36px;
  padding-bottom: ${hp(20)}px;
  padding-top: ${hp(20)}px;
`;

export const PostSubTitle = styled.Text`
  font-family: "PTSerif_700Bold_Italic";
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  color: ${Colors.grey};

  min-height: ${hp(52)}px;
  padding-left: ${hp(8)}px;
  margin-bottom: ${hp(20)}px;
  border-left-width: 3px;
  border-left-color: ${Colors.orange};
`;

export const PostContent = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 17px;
  font-weight: 400;
  line-height: 30px;
`;

export const PostAction = styled.Text`
  color: ${Colors.grey};
  font-family: "Inter_500Medium";
  font-size: 12px;
`;

export const PostSection = styled.Text`
  font-family: "PTSerif_700Bold_Italic";
  font-size: 12px;
  font-style: italic;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: ${Colors.grey};
`;

export const PostPreview = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 17px;
  line-height: 26px;
`;

export const PostFeatured = styled.Text`
  font-family: "PTSerif_700Bold_Italic";
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  text-align: left;
`;

export const PostChip = styled.Text`
  font-family: "Inter_500Medium";
  font-size: 12px;
  color: ${Colors.orange};
`;
