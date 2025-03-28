import styled from "styled-components";

export const CenterTitleWrapper = styled.div`
  display: flex;
  font-weight: 700;
  color: ${props => props.theme.isAlpha ? "#fff": "#222"};
  .item {
    position: relative;
    width: 64px;
    height: 20px;
    margin: 10px 16px;
    font-size: 16px;
    cursor: pointer;

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 3px;
      background-color: ${props => props.theme.isAlpha ? "#fff": "#333"};
    }
  }
`