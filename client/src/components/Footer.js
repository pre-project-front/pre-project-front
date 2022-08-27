import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: hsl(210, 8%, 15%);
  height: 322px;
  flex-grow: 0;
  padding: 32px 12px 12px 12px;
`;

function Footer() {
  return <FooterContainer>푸터</FooterContainer>;
}

export default Footer;
