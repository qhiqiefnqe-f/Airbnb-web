import styled from "@emotion/styled";

export const ScrollViewWrapper = styled.div`
  position: relative;

  .scroll-content {
    overflow: hidden;
    .slot {
      display: flex;
      transition: transform 250ms ease;
    }
  }
  
  .control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    z-index: 9;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 2px 6px 1px rgb(0, 0, 0, .2);

    &.left {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    }

    &.right {
      top: 50%;
      right: 0;
      transform: translate(50%, -50%);
    }
  }

  
`