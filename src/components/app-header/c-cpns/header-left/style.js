import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
  display: flex;
  flex: 1;
  .logo {
    color: ${ props => props.theme.isAlpha ? '#fff' :props.theme.color.primaryColor };
    cursor: pointer;
    margin-left: 24px;
  }
`