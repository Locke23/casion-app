import React from "react";
import { View } from "react-native";
import { PostChip } from "../Base";
import { Container } from "./styles";

interface ChipProps {
  content: string;
}

const Chip: React.FC<ChipProps> = ({ content }) => {
  return (
    <Container>
      <PostChip>{content.toUpperCase()}</PostChip>
    </Container>
  );
};

export default Chip;
