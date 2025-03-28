import styled from "styled-components";

export const DetailPictureWrapper = styled.div`
  position: relative;

  > .picture {
    display: flex;
    background-color: #000;
    height: 600px;
    border: 1px solid #666;

    &:hover {
      .d-cover {
        opacity: 1 !important;
      }
    }

    .item:hover {
      .d-cover {
        opacity: 0 !important;
      }
    }
  }

  .left, .right {
    width: 50%;
    height: 100%;

    .item {
      overflow: hidden;
      border: 1px solid #666;
      position: relative;
      height: 100%;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      
      .d-cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        opacity: 0;
        transition: opacity 250ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .left {
    border-right: none;
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
    }
  }

  .show-btn {
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 99;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #666;
    ${ props => props.theme.mixin.boxshow }
  }
`