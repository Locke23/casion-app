import styled from "styled-components/native";
import { Colors } from "../../config/constants";
import { hp, wp } from "../../utils/dimensions";
import { Row } from "../Base";

export const Container = styled.View``;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
  height: ${hp(110)}px;
  justify-content: flex-start;
`;

export const ImageContainer = styled.View`
  border-left-width: ${wp(4)}px;
  border-left-color: ${Colors.orange};
`;

export const ItemPreview = styled(Row)`
  padding-bottom: ${hp(10)}px;
  padding-top: ${hp(10)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.lightGrey};
`;
