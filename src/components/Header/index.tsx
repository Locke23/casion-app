import React from "react";
import ArrowLeft from "../../../assets/icons/ArrrowLeft";
import Logo from "../../../assets/icons/Logo";
import { PostAction } from "../../components/Base";

import { Row, Container } from "./styles";

interface HeaderProps {
  canGoback: boolean;
  goBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ canGoback, goBack }) => {
  return (
    <Container canGoBack={canGoback}>
      {canGoback && (
        <Row onPress={goBack}>
          <ArrowLeft />
          <PostAction>Voltar</PostAction>
        </Row>
      )}
      <Logo />
    </Container>
  );
};

export default Header;
