import styled from "styled-components/native";
import { Colors } from "../../config/constants";
import { hp, wp } from "../../utils/dimensions";

export const Container = styled.View`
  height: ${hp(20)}px;
  width: ${wp(80)}px;
  border-width: 1px;
  border-bottom-right-radius: 8px;
  border-color: ${Colors.orange};
  justify-content: center;
  align-items: center;
`;
