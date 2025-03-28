import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  position: ${props => props.isFixed ? 'fixed': ''};

  .content {
    transition: all 200ms ease;
    border-bottom: 1px solid ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)': 'rgba(233, 233, 233, 1)'};
    position: relative;
    z-index: 99;
    background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)': '#fff'};
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .c-cover {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .3);
  }
`
export const AppAreaHeaderWrapper = styled.div`
  transition: height 250ms ease;
  height: ${ props => props.isSearch ? '100px': '0' };
`