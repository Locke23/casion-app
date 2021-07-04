import styled from "styled-components/native";
import { hp } from "../../utils/dimensions";

export const Container = styled.View<{ canGoBack: boolean }>`
  width: 100%;
  flex-direction: row;
  margin-bottom: ${hp(20)}px;
  margin-top: ${hp(20)}px;
  justify-content: ${({ canGoBack }) =>
    canGoBack ? "space-between" : "center"};
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;
