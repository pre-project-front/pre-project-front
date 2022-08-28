import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "hsl(206, 100%,52%)"};
  border: 1px solid;
  border-radius: 3px;
  border-color: ${(props) => props.borderColor || "transparent"};
  color: ${(props) => props.color || "hsl(0,0%,100%)"};
  font-size: 13px;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding || "7px 10.4px"};
  margin: ${(props) => props.margin};
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.6);
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  margin-top: 50px;
`;
