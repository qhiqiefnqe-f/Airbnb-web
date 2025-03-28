import styled from "styled-components";

export const LongForListWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  .inner {
    padding: 8px;

    .list-info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      cursor: pointer;
    }

    .cover {
      width: 100%;
    }

    .bg-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 24px;
      color: #fff;

      .city {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 5px;
      }

      .price {
        font-size: 12px;
      }
    }
  }
`