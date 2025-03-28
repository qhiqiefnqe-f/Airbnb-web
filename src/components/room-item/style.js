import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${ props => props.itemWidth };
  padding: 8px;
  flex-shrink: 0;

  .inner {
    width: 100%;
    cursor: pointer;
  }

  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    overflow: hidden;
    border-radius: 5px;
  }

  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .swiper {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;
    
    &:hover {
      .control {
        display: flex;
      }
    }

    .indicator {
      position: absolute;
      bottom: 10px;
      z-index: 9;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 30%;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    .control {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      color: #fff;
      z-index: 1;
      display: none;
      justify-content: space-between;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
  }

  .desc {
    margin: 8px 0;
    font-size: 12px;
    color: ${props => props.textcolor};
  }

  .name {
    font-weight: 700;
    margin: 8px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    font-size: 12px;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    margin-top: 2px;
    color: ${ props => props.theme.textColor.primaryTextColor };

    .text {
      margin: 0 2px 0 4px;
    }

    .MuiRating-icon {
      margin-right: -2px;
    }
  }
`