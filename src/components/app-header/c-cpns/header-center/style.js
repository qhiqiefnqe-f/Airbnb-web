import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 38px;
    border: 2px solid #f5f5f5;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxshow}

    .text {
      font-weight: 700;
      padding: 0 20px;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-right: 5px;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
  }

  .infos {
    position: relative;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);

    .icon {
      position: absolute;
      right: 5px;
      top: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 5px;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
      cursor: pointer;
    }
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }


`