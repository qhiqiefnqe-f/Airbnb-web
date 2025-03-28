import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  padding: 20px 15px;
  position: relative;
  margin-top: 128px;

  .totalRoom {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 10px 8px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .entire-cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .8);
  }
`