import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 278px;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  border: 1px black solid;
`;

function Footer() {
  return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
