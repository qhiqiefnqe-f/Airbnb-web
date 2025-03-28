import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: #333;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;
    z-index: 9;
    .icon {
      position: absolute;
      right: 25px;
      top: 30px;
      cursor: pointer;
    }
  }

  .swiper {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;

    .control {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      color: #fff;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .center {
      width: 100%;
      overflow: hidden;
      position: relative;
      height: 100%;
      max-width: 105vh;
      border-radius: 3px;
      user-select: none;
      cursor: pointer;

      .pic-enter {
        transform: translateX(${props => props.isNext ? '100%': '-100%'});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        transform: translateX(0);
        opacity: 1;
      }

      .pic-exit-active {
        transform: translateX(${props => props.isNext ? '100%': '-100%'});
        opacity: 0;
        transition: all 200ms ease;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        height: 100%;
      }
    }
  }

  .bottom {
    position: relative;
    margin-top: 10px;
    height: 100px;
    display: flex;
    justify-content: center;

    .info {
      position: absolute;
      max-width: 105vh;
      color: #fff;
      bottom: 10px;

      .desc {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        
        .text {
          cursor: pointer;
        }
      }

      .b-list {
        overflow: hidden;
        transition: height 300ms ease;
        height: ${ props => props.isShowpict ? '67px': '0' };
        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 67px;
            opacity: 0.5;
            border-radius: 2px;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`