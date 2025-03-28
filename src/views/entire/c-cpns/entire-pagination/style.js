import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .MuiPaginationItem-page {
      margin: 0 10px;
      
      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-icon {
      font-size: 25px;
    }

    .desc {
      margin-top: 15px;
      color: #000;
    }

    .about {
      margin-top: 25px;
      color: #999;
      font-size: 12px;
    }
  }
`