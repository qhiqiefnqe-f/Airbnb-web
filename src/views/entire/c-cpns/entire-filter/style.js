import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 80px;
  z-index: 9;
  background-color: #fff;
  border: 1px solid #eee;
  height: 48px;

  .filter {
    display: flex;
    padding: 8px 18px;
    font-size: 12px;

    .item {
      display: flex;
      align-items: center;
      padding: 6px 15px;
      background-color: #fff;
      border: 1px solid #ddd;
      margin: 0 8px 0 4px;
      border-radius: 4px;
      cursor: pointer;

      &.active {
        color: #fff;
        background-color: ${ props => props.theme.color.secondaryColor };
        border: 1px solid #eee;
      }
    }
  }
`